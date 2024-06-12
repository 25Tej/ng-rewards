import { RewardDetailsRepository } from "../repository/reward-details-repository"
import { RewardDetailsService } from "../service/reward-details-service"
import { rewardsResponse } from "../builders/response-builder"
import { RewardDetailsController } from "../controller/reward-details-controller"

const rewardsTableName = 'ngrewards'
const rewardDetailsRepository = new RewardDetailsRepository(rewardsTableName)
const rewardDetailsService = new RewardDetailsService(rewardDetailsRepository);
const rewardDetailsController = new RewardDetailsController(rewardDetailsService)

import {
    StatusCode,
    HEADERS,
    MESSAGES
} from "../constants/constants"

export const handler = async (event) => {
    try {
        const customerId = event.queryParameters?.customerId;
        if (!customerId || (customerId.length < 7 || customerId.length > 8)) {
            return {
                "statusCode": StatusCode.BAD_REQUEST,
                "headers": HEADERS,
                "body": JSON.stringify({ error: MESSAGES.INVALID_CUSTOMER_ID }),
            };
        }
        const getRewards = await rewardDetailsController.getRewardDetailsById(customerId);
        const body = rewardsResponse(getRewards);
        return {
            "statusCode": StatusCode.OK,
            "headers": HEADERS,
            "body": JSON.stringify(body),
        };
    } catch (error) {

        return {
            "statusCode": StatusCode.INTERNAL_SERVER_ERROR,
            "headers": HEADERS,
            "body": JSON.stringify({ error: MESSAGES.FAILED_TO_GET_DATA }),

        }
    }

}
