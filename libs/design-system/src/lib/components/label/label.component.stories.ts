import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { LabelComponent } from './label.component';

export default {
  title: 'LabelComponent',
  component: LabelComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<LabelComponent>;

const Template: Story<LabelComponent> = (args: LabelComponent) => ({
  props: args,
  template: '<marketplace-label>Some label</marketplace-label>'
});


export const Primary = Template.bind({});
Primary.args = {
}
