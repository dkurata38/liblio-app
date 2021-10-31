import {Meta, Story} from "@storybook/angular/types-6-0";
import {LoginFormComponent} from "./login-form.component";
import {componentWrapperDecorator, moduleMetadata} from "@storybook/angular";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export default {
  title: 'Components/LoginForm',
  component: LoginFormComponent,
  decorators: [
    moduleMetadata({
      declarations: [LoginFormComponent],
      imports: [
        BrowserAnimationsModule,
        CommonModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
      ]
    }),
    componentWrapperDecorator(story => `<div style="width: 360px">${story}</div>`)
  ],
} as Meta

const Template: Story<LoginFormComponent> = args => ({
  props: {
    ...args
  }
});

export const Default = Template.bind({});


