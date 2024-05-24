"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const rewardDetailsRepository_1 = require("../repository/rewardDetailsRepository");
const rewardDetailsService_1 = require("../service/rewardDetailsService");
const rewardsTableName = 'RewardDetails';
const rewardDetailsRepository = new rewardDetailsRepository_1.RewardDetailsRepository(rewardsTableName);
const rewardDetailsService = new rewardDetailsService_1.RewardDetailsService(rewardDetailsRepository);
const handler = async (event) => {
    console.log("hello1");
    try {
        const queryParameter = '3678905';
        const data = await rewardDetailsService.getRewardDetailsById(queryParameter);
        console.log(data);
        if (data?.Item && data.$metadata.httpStatusCode == 200) {
            const rewards = data.Item;
            console.log(rewards);
            return {
                statusCode: data.$metadata.httpStatusCode,
                message: `rewards details fetched successfully`,
                payload: rewards.activities
            };
        }
        return {
            statusCode: data.$metadata.httpStatusCode,
            message: `Invalid customerId`,
        };
    }
    catch (error) {
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:4200'
            },
            body: JSON.stringify({ error: 'Internal server error!' }),
            message: 'Failed to get Data',
        };
    }
};
exports.handler = handler;
(0, exports.handler)("hello");
//# sourceMappingURL=rewardsDetailsController.js.map