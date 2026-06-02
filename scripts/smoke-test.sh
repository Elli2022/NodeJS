#!/usr/bin/env bash
set -euo pipefail

DOCS_URL="${1:-https://nodejs-microservice-modernized.netlify.app}"
API_URL="${2:-http://127.0.0.1:3000}"
RUN_API="${RUN_API:-1}"

echo "Docs smoke test: $DOCS_URL"
DOCS_CODE=$(curl -s -o /tmp/nodejs-docs.html -w "%{http_code}" "$DOCS_URL")
echo "  GET / -> HTTP $DOCS_CODE"
[[ "$DOCS_CODE" == "200" ]] || exit 1
grep -q "NodeJS Microservice" /tmp/nodejs-docs.html || exit 1

if [[ "$RUN_API" != "1" ]]; then
  echo "Skipping API smoke (RUN_API!=1)."
  exit 0
fi

echo "API smoke test: $API_URL"
HEALTH=$(curl -s -w "\n%{http_code}" "$API_URL/health")
HEALTH_CODE=$(echo "$HEALTH" | tail -n1)
echo "  GET /health -> HTTP $HEALTH_CODE"
[[ "$HEALTH_CODE" == "200" ]] || exit 1

USER="smoke$(date +%s)"
POST=$(curl -s -w "\n%{http_code}" -X POST "$API_URL/api/v1/" \
  -H "content-type: application/json" \
  -d "{\"username\":\"$USER\",\"password\":\"secret123\"}")
POST_CODE=$(echo "$POST" | tail -n1)
echo "  POST /api/v1/ -> HTTP $POST_CODE"
[[ "$POST_CODE" == "200" ]] || { echo "$POST" | sed '$d'; exit 1; }

GET=$(curl -s -w "\n%{http_code}" "$API_URL/api/v1/")
GET_CODE=$(echo "$GET" | tail -n1)
GET_BODY=$(echo "$GET" | sed '$d')
echo "  GET /api/v1/ -> HTTP $GET_CODE"
[[ "$GET_CODE" == "200" ]] || exit 1
echo "$GET_BODY" | grep -q "$USER" || exit 1

DUP=$(curl -s -w "\n%{http_code}" -X POST "$API_URL/api/v1/" \
  -H "content-type: application/json" \
  -d "{\"username\":\"$USER\",\"password\":\"secret123\"}")
DUP_CODE=$(echo "$DUP" | tail -n1)
echo "  duplicate POST -> HTTP $DUP_CODE"
[[ "$DUP_CODE" == "403" ]] || exit 1

echo "All NodeJS smoke tests passed."
