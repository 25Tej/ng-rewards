"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RewardDetailsController = void 0;
class RewardDetailsController {
    rewardDetailsService;
    constructor(rewardDetailsService) {
        this.rewardDetailsService = rewardDetailsService;
    }
    async getRewardDetailsById(customerId) {
        return await this.rewardDetailsService.getRewardDetailsById(customerId);
    }
}
exports.RewardDetailsController = RewardDetailsController;
//# sourceMappingURL=rewardDetailsController.js.map