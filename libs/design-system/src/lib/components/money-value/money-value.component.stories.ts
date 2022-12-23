import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { MoneyValueComponent } from './money-value.component';

export default {
  title: 'MoneyValueComponent',
  component: MoneyValueComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<MoneyValueComponent>;

const Template: Story<MoneyValueComponent> = (args: MoneyValueComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
  amount: 20.34,
}
