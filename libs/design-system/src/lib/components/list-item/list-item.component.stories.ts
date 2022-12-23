import { moduleMetadata, Story, Meta, componentWrapperDecorator } from '@storybook/angular';
import { ListItemComponent } from './list-item.component';

export default {
  title: 'ListItemComponent',
  component: ListItemComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
    componentWrapperDecorator((story) => `<div style="width: 440px">${story}</div>`)
  ],
} as Meta<ListItemComponent>;

const Template: Story<ListItemComponent> = (args: ListItemComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
  description: 'Super dog',
  amount: 45.34,
  imagePath: 'https://i.picsum.photos/id/884/300/300.jpg?hmac=jAyoGx30ARoANVmERuqCldqNt8s_w-5k6sg7DURNzvI',
}
