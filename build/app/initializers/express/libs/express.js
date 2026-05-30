"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createServer(options) {
    return Object.freeze({ server });
    function server({ hostname = "localhost", port = 3000 }) {
        // Tillför standardvärden
        // const routes = handler.routes; // Eftersom detta inte används, kommenterar vi bort det.
        options.app.use(options.helmet());
        options.app.options("*", options.cors({ credentials: true, origin: true }));
        options.app.use(options.cors());
        options.app.use(options.compression());
        options.app.use(options.json());
        options.app.use(options.urlencoded({ extended: true }));
        options.app.get("/", (req, res) => res.json({
            data: "status quo, nu testar jag min app",
        }));
        options.app.post("/", (req, res) => res.json({ body: req.body }));
        for (let route of options.handler.routes) {
            options.app[route.method](route.path, route.component);
        }
        options.app.listen(port, hostname, () => {
            options.logger.info(`[EXPRESS] Server running at http://${hostname}:${port}`);
            return;
        });
    }
}
exports.default = createServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvaW5pdGlhbGl6ZXJzL2V4cHJlc3MvbGlicy9leHByZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBYUEsU0FBd0IsWUFBWSxDQUFDLE9BQXNCO0lBQ3pELE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFFakMsU0FBUyxNQUFNLENBQUMsRUFBRSxRQUFRLEdBQUcsV0FBVyxFQUFFLElBQUksR0FBRyxJQUFJLEVBQUU7UUFDckQseUJBQXlCO1FBQ3pCLDBGQUEwRjtRQUUxRixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1RSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUV4RCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FDaEMsR0FBRyxDQUFDLElBQUksQ0FBQztZQUNQLElBQUksRUFBRSxtQ0FBbUM7U0FDMUMsQ0FBQyxDQUNILENBQUM7UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFbEUsS0FBSyxJQUFJLEtBQUssSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN4RDtRQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFO1lBQ3RDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNqQixzQ0FBc0MsUUFBUSxJQUFJLElBQUksRUFBRSxDQUN6RCxDQUFDO1lBQ0YsT0FBTztRQUNULENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztBQUNILENBQUM7QUFoQ0QsK0JBZ0NDIn0=