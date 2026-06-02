"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeInputObjectFactory({ md5, sanitize }) {
    let localErrorMsgs = {};
    function inputObj({ params, errorMsgs }) {
        const { username, password, created = Date.now(), modified = Date.now(), } = params;
        return Object.freeze({
            username: () => checkUsername({ username, errorMsgs }),
            password: () => checkPassword({ password, errorMsgs }),
            created: () => created,
            modified: () => modified,
        });
    }
    function checkUsername({ username, errorMsgs }) {
        checkRequiredParam({
            param: username,
            paramName: "username",
            errorMsgs,
        });
        if (!strValidator(username)) {
            throw new Error(`${errorMsgs.INVALID_STRING}username`);
        }
        username = sanitize(username);
        return username;
    }
    function checkPassword({ password, errorMsgs }) {
        checkRequiredParam({
            param: password,
            paramName: "password",
            errorMsgs,
        });
        password = sanitize(password);
        password = hash({ param: password });
        return password;
    }
    function hash({ param }) {
        return md5(param);
    }
    function checkRequiredParam({ param, paramName, errorMsgs }) {
        if (!param || param === "")
            throw new Error(`${errorMsgs.MISSING_PARAMETER}${paramName}`);
        return;
    }
    // validerar strängen: ska vara större än 4 karaktärer men mindre än 25 och får bara vara små bokstäver och siffror
    function strValidator(str) {
        return (str.length > 4 &&
            str.length < 25 &&
            str.match(/^[a-z0-9]+$/) && // Endast små bokstäver och siffror för hela strängen
            str.split("")[0].match(/[a-z]/) // Startar med en liten bokstav
        );
    }
    return Object.freeze({ inputObj });
}
exports.default = makeInputObjectFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFrZS1pbnB1dC1vYmplY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudC9lbnRpdGllcy9tYWtlLWlucHV0LW9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLFNBQXdCLHNCQUFzQixDQUFDLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRTtJQUM5RCxJQUFJLGNBQWMsR0FBRyxFQUFFLENBQUM7SUFFeEIsU0FBUyxRQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFO1FBQ3JDLE1BQU0sRUFDSixRQUFRLEVBQ1IsUUFBUSxFQUNSLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQ3BCLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQ3RCLEdBQUcsTUFBTSxDQUFDO1FBRVgsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ25CLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLENBQUM7WUFDdEQsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQztZQUN0RCxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTztZQUN0QixRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUTtTQUN6QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsU0FBUyxhQUFhLENBQUMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFO1FBQzVDLGtCQUFrQixDQUFDO1lBQ2pCLEtBQUssRUFBRSxRQUFRO1lBQ2YsU0FBUyxFQUFFLFVBQVU7WUFDckIsU0FBUztTQUNWLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDM0IsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLFNBQVMsQ0FBQyxjQUFjLFVBQVUsQ0FBQyxDQUFDO1NBQ3hEO1FBRUQsUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQsU0FBUyxhQUFhLENBQUMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFO1FBQzVDLGtCQUFrQixDQUFDO1lBQ2pCLEtBQUssRUFBRSxRQUFRO1lBQ2YsU0FBUyxFQUFFLFVBQVU7WUFDckIsU0FBUztTQUNWLENBQUMsQ0FBQztRQUNILFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUIsUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxTQUFTLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRTtRQUNyQixPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRUQsU0FBUyxrQkFBa0IsQ0FBQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFO1FBQ3pELElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxLQUFLLEVBQUU7WUFDeEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLFNBQVMsQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ2hFLE9BQU87SUFDVCxDQUFDO0lBRUQsbUhBQW1IO0lBQ25ILFNBQVMsWUFBWSxDQUFDLEdBQVE7UUFDNUIsT0FBTyxDQUNMLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUNkLEdBQUcsQ0FBQyxNQUFNLEdBQUcsRUFBRTtZQUNmLEdBQUcsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUkscURBQXFEO1lBQ2pGLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLCtCQUErQjtTQUNoRSxDQUFDO0lBQ0osQ0FBQztJQUVELE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDckMsQ0FBQztBQWxFRCx5Q0FrRUMifQ==