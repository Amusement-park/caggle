import { RankModule } from './rank.module';

describe('RankModule', () => {
    let rankModule: RankModule;

    beforeEach(() => {
        rankModule = new RankModule();
    });

    it('should create an instance', () => {
        expect(rankModule).toBeTruthy();
    });
});
