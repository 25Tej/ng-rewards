// import { RewardDetailsRepository } from "../repository/rewardDetails-repository"
// import { RewardDetailsService } from "../service/rewardDetails-service"
// import { validateCustomerId } from '../validators/request-validator';
// import { responseBuilder } from '../builders/rewards-response-builder'

// const rewardsTableName = 'RewardDetails'
// const rewardDetailsRepository = new RewardDetailsRepository(rewardsTableName)
// const rewardDetailsService = new RewardDetailsService(rewardDetailsRepository);

// export const handler = async (event) => {
//     //console.log("hello1")
//     try {
//         const queryParameter = '3678905'
//         if (!validateCustomerId(queryParameter)) {
//             return responseBuilder.badRequest("Invalid customerId");

//         }

//         const data = await rewardDetailsService.getRewardDetailsById(queryParameter);
//         if (data.Item.customerId === queryParameter) {
//             return responseBuilder.success({ customerId: data.item.customerId }, 200);
//             console.log(data.Item.customerId);
//         }
//         return responseBuilder.notFound("customerId not found");
//     } catch (error) {
//         return responseBuilder.internalServerError("Internal Server Error");
//     }
// };
import { RewardDetailsRepository } from "../repository/rewardDetails-repository"
import { RewardDetailsService } from "../service/rewardDetails-service"
import { validateCustomerId } from '../validators/request-validator';
import { ResponseBuilder } from '../builders/rewards-response-builder'


const rewardsTableName = 'RewardDetails'
const rewardDetailsRepository = new RewardDetailsRepository(rewardsTableName)
const rewardDetailsService = new RewardDetailsService(rewardDetailsRepository);
const responseBuilder = new ResponseBuilder();

export const handler = async (event) => {
    try {
        const queryParameter = '3678905'
        if (!validateCustomerId(queryParameter)) {
            return responseBuilder.badRequest("Invalid customerId");
        }

        const data = await rewardDetailsService.getRewardDetailsById(queryParameter);
        if (data.Item.customerId === queryParameter) {
            console.log(data.Item.customerId);
        }
        return responseBuilder.notFound("customerId not found");
    } catch (error) {
        return responseBuilder.internalServerError("Internal Server Error");
    }
};
