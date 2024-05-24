

export class ResponseBuilder {
    success(data: any, statusCode: number) {
        return {
            statusCode,
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:4200",
            },
        };
    }

    badRequest(message: string) {
        return this.success({ message }, 400);
    }

    notFound(message: string) {
        return this.success({ message }, 404);
    }

    internalServerError(message: string) {
        return this.success({ message }, 500);
    }
}






























// import { RewardDetails } from "../model/RewardDetails";

// export const buildRewardDetailsResponse = (rewardDetails: RewardDetails) => {
//     const response = {
//         jsonapi: {
//             version: '1.0',
//         },
//         data: {
//             type: 'rewards',
//             attributes: {
//                 customerId: rewardDetails.customerId,
//                 activities: rewardDetails.activities.map(activity => ({
//                     activityCompletionDate: activity.activityCompletionDate,
//                     activityName: activity.activityName,
//                     activityStartDate: activity.activityStartDate,
//                     pointsEarned: activity.pointsEarned,
//                     rewardsEarned: activity.rewardsEarned,
//                 })),
//             },
//         },
//     };
//     return response;
// };
