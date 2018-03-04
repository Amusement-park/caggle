import { DiscussionModule } from './discussion.module';

describe('DiscussionModule', () => {
    let discussionModule: DiscussionModule;

    beforeEach(() => {
        discussionModule = new DiscussionModule();
    });

    it('should create an instance', () => {
        expect(DiscussionModule).toBeTruthy();
    });
});
