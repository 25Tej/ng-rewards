import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { GetCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
//import { RewardDetails } from "../model/rewardDetails"; 

export class RewardDetailsRepository {
    private client: DynamoDBClient;
    private docClient: DynamoDBDocumentClient;
    private tableName: string;

    constructor(tableName: string) {
        this.client = new DynamoDBClient({ region: "us-west-2" });
        this.docClient = DynamoDBDocumentClient.from(this.client);
        this.tableName = tableName;
    }

    async getRewardDetailsById(customerId: string): Promise<any> {
        console.log(customerId)
        const command = new GetCommand({
            TableName: "ng_rewards",
            Key: {
                customerId: customerId 
            }
        });

        const response: any = await this.docClient.send(command);
        //console.log("hello5")
        console.log(response);
        return response;
    }
}
