import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TitleComponent } from './title.component';

export default {
  title: 'TitleComponent',
  component: TitleComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<TitleComponent>;

const Template: Story<TitleComponent> = (args: TitleComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
  text: 'Marketplace',
}
