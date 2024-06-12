
export const rewardsResponse = (reward) => {
    const getRewardsJsonApi = {
        "jsonapi": {
            "version": "1.0"
        },
        "data": {
            "type": "rewards",
            "attributes": {
                "customerId": reward.Item.customerId,
                "activities": reward.Item.activity.map(activity => ({
                    activityCompletionDate: activity.activityCompletionDate,
                    activityName: activity.activityName,
                    activityStartDate: activity.activityStartDate,
                    pointsEarned: activity.pointsEarned,
                    rewardsEarned: activity.rewardsEarned,

                }))
            }
        }
    };
    return getRewardsJsonApi;
};

