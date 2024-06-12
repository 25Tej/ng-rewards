import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { GetCommand, DynamoDBDocumentClient} from "@aws-sdk/lib-dynamodb";
import { RewardDetails } from "../model/reward-details"; 

export class RewardDetailsRepository {
    private client: DynamoDBClient;
    private docClient: DynamoDBDocumentClient;
    private tableName: string;

    constructor(tableName: string) {
        this.client = new DynamoDBClient({ region: "us-east-1" });
        this.docClient = DynamoDBDocumentClient.from(this.client);
        this.tableName = tableName;
    }

    async getRewardDetailsById(customerId: string): Promise<RewardDetails> {
        const command = new GetCommand({
            TableName: this.tableName,
            Key: {
                customerId: customerId 
            }
        });

        const response: any = await this.docClient.send(command);
        console.log(response);
        return response;
    }
}