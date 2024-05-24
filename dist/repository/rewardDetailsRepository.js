"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RewardDetailsRepository = void 0;
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
class RewardDetailsRepository {
    client;
    docClient;
    tableName;
    constructor(tableName) {
        this.client = new client_dynamodb_1.DynamoDBClient({ region: "us-west-2" });
        this.docClient = lib_dynamodb_1.DynamoDBDocumentClient.from(this.client);
        this.tableName = tableName;
    }
    async getRewardDetailsById(customerId) {
        console.log(customerId);
        const command = new lib_dynamodb_1.GetCommand({
            TableName: "ng_rewards",
            Key: {
                customerId: customerId
            }
        });
        const response = await this.docClient.send(command);
        console.log("hello5");
        console.log(response);
        return response;
    }
}
exports.RewardDetailsRepository = RewardDetailsRepository;
//# sourceMappingURL=rewardDetailsRepository.js.map