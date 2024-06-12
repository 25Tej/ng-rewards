"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const rewardDetailsRepository_1 = require("../repository/rewardDetailsRepository");
const rewardDetailsService_1 = require("../service/rewardDetailsService");
const response_builder_1 = require("../builders/response-builder");
const rewardDetailsController_1 = require("../controller/rewardDetailsController");
const rewardsTableName = 'ngrewards';
const rewardDetailsRepository = new rewardDetailsRepository_1.RewardDetailsRepository(rewardsTableName);
const rewardDetailsService = new rewardDetailsService_1.RewardDetailsService(rewardDetailsRepository);
const rewardDetailsController = new rewardDetailsController_1.RewardDetailsController(rewardDetailsService);
const constants_1 = require("../constants/constants");
const handler = async (event) => {
    try {
        const customerId = event.queryParameters?.customerId;
        if (!customerId || customerId.length < 7 || customerId.length > 7) {
            return {
                "statusCode": constants_1.StatusCode.BAD_REQUEST,
                "headers": constants_1.HEADERS,
                "body": JSON.stringify({ error: constants_1.MESSAGES.INVALID_CUSTOMER_ID }),
            };
        }
        const getRewards = await rewardDetailsController.getRewardDetailsById(customerId);
        const body = (0, response_builder_1.rewardsResponse)(getRewards);
        return {
            "statusCode": constants_1.StatusCode.OK,
            "headers": constants_1.HEADERS,
            "body": JSON.stringify(body),
        };
    }
    catch (error) {
        return {
            "statusCode": constants_1.StatusCode.INTERNAL_SERVER_ERROR,
            "headers": constants_1.HEADERS,
            "body": JSON.stringify({ error: constants_1.MESSAGES.FAILED_TO_GET_DATA }),
        };
    }
};
exports.handler = handler;
//# sourceMappingURL=resource-handler.js.map