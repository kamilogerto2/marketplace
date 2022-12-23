import { moduleMetadata, Story, Meta, componentWrapperDecorator } from '@storybook/angular';
import { GridItemComponent } from './grid-item.component';

export default {
  title: 'GridItemComponent',
  component: GridItemComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
    componentWrapperDecorator((story) => `<div style="width: 240px">${story}</div>`)
  ],
} as Meta<GridItemComponent>;

const Template: Story<GridItemComponent> = (args: GridItemComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
  description: 'Super dog',
  amount: 45.34,
  imagePath: 'https://i.picsum.photos/id/884/300/300.jpg?hmac=jAyoGx30ARoANVmERuqCldqNt8s_w-5k6sg7DURNzvI',
}
