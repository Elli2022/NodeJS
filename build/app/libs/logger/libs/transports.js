"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createLogger({ format, transports }) {
    const filePath = process.env.NODE_LOG_PATH;
    const { combine, printf, colorize, json } = format;
    const logFormat = printf(({ level, message, timestamp, stack }) => {
        return `${timestamp} ${level}: ${stack || message}`;
    });
    const transportDevArray = [
        new transports.Console({
            level: "http",
            format: combine(colorize(), logFormat),
        }),
        new transports.File({
            filename: filePath + "/error.log",
            handleExceptions: true,
            maxsize: 5242880,
            maxFiles: 5,
            level: "error",
            format: combine(json()),
        }),
        new transports.File({
            filename: filePath + "/all.log",
            handleExceptions: true,
            maxsize: 5242880,
            maxFiles: 5,
            level: "http",
            format: combine(json()),
        }),
    ];
    const transportProdArray = [
        new transports.Console({
            level: "http",
            format: combine(colorize(), logFormat),
        }),
        new transports.File({
            filename: filePath + "/error.log",
            handleExceptions: true,
            maxsize: 5242880,
            maxFiles: 5,
            level: "error",
            format: combine(json()),
        }),
        new transports.File({
            filename: filePath + "/all.log",
            handleExceptions: true,
            maxsize: 5242880,
            maxFiles: 5,
            level: "http",
            format: combine(json()),
        }),
    ];
    return Object.freeze({ logger });
    function logger() {
        return process.env.NODE_ENV === "development"
            ? transportDevArray
            : transportProdArray;
    }
}
exports.default = createLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNwb3J0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvbGlicy9sb2dnZXIvbGlicy90cmFuc3BvcnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsU0FBd0IsWUFBWSxDQUFDLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRTtJQUN6RCxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUMzQyxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDO0lBRW5ELE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtRQUNoRSxPQUFPLEdBQUcsU0FBUyxJQUFJLEtBQUssS0FBSyxLQUFLLElBQUksT0FBTyxFQUFFLENBQUM7SUFDdEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLGlCQUFpQixHQUFHO1FBQ3hCLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQztZQUNyQixLQUFLLEVBQUUsTUFBTTtZQUNiLE1BQU0sRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsU0FBUyxDQUFDO1NBQ3ZDLENBQUM7UUFDRixJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUM7WUFDbEIsUUFBUSxFQUFFLFFBQVEsR0FBRyxZQUFZO1lBQ2pDLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsT0FBTyxFQUFFLE9BQU87WUFDaEIsUUFBUSxFQUFFLENBQUM7WUFDWCxLQUFLLEVBQUUsT0FBTztZQUNkLE1BQU0sRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDeEIsQ0FBQztRQUNGLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQztZQUNsQixRQUFRLEVBQUUsUUFBUSxHQUFHLFVBQVU7WUFDL0IsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixPQUFPLEVBQUUsT0FBTztZQUNoQixRQUFRLEVBQUUsQ0FBQztZQUNYLEtBQUssRUFBRSxNQUFNO1lBQ2IsTUFBTSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN4QixDQUFDO0tBQ0gsQ0FBQztJQUVGLE1BQU0sa0JBQWtCLEdBQUc7UUFDekIsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDO1lBQ3JCLEtBQUssRUFBRSxNQUFNO1lBQ2IsTUFBTSxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxTQUFTLENBQUM7U0FDdkMsQ0FBQztRQUNGLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQztZQUNsQixRQUFRLEVBQUUsUUFBUSxHQUFHLFlBQVk7WUFDakMsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixPQUFPLEVBQUUsT0FBTztZQUNoQixRQUFRLEVBQUUsQ0FBQztZQUNYLEtBQUssRUFBRSxPQUFPO1lBQ2QsTUFBTSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN4QixDQUFDO1FBQ0YsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDO1lBQ2xCLFFBQVEsRUFBRSxRQUFRLEdBQUcsVUFBVTtZQUMvQixnQkFBZ0IsRUFBRSxJQUFJO1lBQ3RCLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFFBQVEsRUFBRSxDQUFDO1lBQ1gsS0FBSyxFQUFFLE1BQU07WUFDYixNQUFNLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3hCLENBQUM7S0FDSCxDQUFDO0lBRUYsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUVqQyxTQUFTLE1BQU07UUFDYixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLGFBQWE7WUFDM0MsQ0FBQyxDQUFDLGlCQUFpQjtZQUNuQixDQUFDLENBQUMsa0JBQWtCLENBQUM7SUFDekIsQ0FBQztBQUNILENBQUM7QUE3REQsK0JBNkRDIn0=