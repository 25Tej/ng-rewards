"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RewardDetailsService = void 0;
class RewardDetailsService {
    rewardDetailsRepository;
    constructor(rewardDetailsRepository) {
        this.rewardDetailsRepository = rewardDetailsRepository;
    }
    async getRewardDetailsById(customerId) {
        console.log(customerId);
        return await this.rewardDetailsRepository.getRewardDetailsById(customerId);
    }
}
exports.RewardDetailsService = RewardDetailsService;
//# sourceMappingURL=rewardDetailsService.js.map