import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { IconActionBoxComponent } from './icon-action-box.component';

export default {
  title: 'IconActionBoxComponent',
  component: IconActionBoxComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<IconActionBoxComponent>;

const Template: Story<IconActionBoxComponent> = (args: IconActionBoxComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
  actionText: 'Balance',
  actionIcon: 'account_balance_wallet',
}
