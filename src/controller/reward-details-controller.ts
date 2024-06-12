import { RewardDetailsService } from "../service/reward-details-service"
import { RewardDetails } from "../model/reward-details"

export class RewardDetailsController {
    private rewardDetailsService: RewardDetailsService;

    constructor(rewardDetailsService: RewardDetailsService) {
        this.rewardDetailsService = rewardDetailsService;
    }

    async getRewardDetailsById(customerId: string): Promise<RewardDetails> {
        return await this.rewardDetailsService.getRewardDetailsById(customerId);
    }

}
