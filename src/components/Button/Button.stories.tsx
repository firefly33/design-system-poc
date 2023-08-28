import type { Meta, StoryObj } from '@storybook/react';
import { VARIANTS } from '../../constants/Variants';
import Button from './Button';
import { CheckIcon, WifiIcon, XMarkIcon } from "@heroicons/react/20/solid"
import { ICON_POSITIONS } from '../../constants/icon-positions';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'Button',
    variant: VARIANTS.PRIMARY,
    onClick: () => {
      alert("Clicked on button primary")
    }
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: VARIANTS.SECONDARY
  },
};

export const Small: Story = {
  args: {
    children: 'Button',
    variant: VARIANTS.DANGER
  },
};

export const Success: Story = {
  args: {
    children: 'Button',
    variant: VARIANTS.SUCCESS
  },
};

export const Warning: Story = {
  args: {
    children: 'Button',
    variant: VARIANTS.WARNING
  },
};

export const Info: Story = {
  args: {
    children: 'Button',
    variant: VARIANTS.INFO,
    style: {
      // backgroundColor: 'red',
    }
  }
};

export const Dark: Story = {
  args: {
    children: 'Button',
    variant: VARIANTS.DARK,
    style: {
      // backgroundColor: 'red',
    }
  }
};

export const Light: Story = {
  args: {
    children: 'Button',
    variant: VARIANTS.LIGHT,
    style: {
      // backgroundColor: 'red',
    }
  }
};

export const Link: Story = {
  args: {
    children: 'Button',
    variant: VARIANTS.LINK,
    style: {
      // backgroundColor: 'red',
    }
  }
};


export const OutlinePrimary: Story = {
  args: {
    children: 'Button',
    variant: VARIANTS.OUTLINE_PRIMARY,
  },
};

export const OutlineSecondary: Story = {
  args: {
    children: 'Button',
    variant: VARIANTS.OUTLINE_SECONDARY
  },
};

export const OutlineDanger: Story = {
  args: {
    children: 'Button',
    variant: VARIANTS.OUTLINE_DANGER
  },
};

export const OutlineSuccess: Story = {
  args: {
    children: 'Button',
    variant: VARIANTS.OUTLINE_SUCCESS
  },
};
export const OutlineWarning: Story = {
  args: {
    children: 'Button',
    variant: VARIANTS.OUTLINE_WARNING
  },
};
export const OutlineInfo: Story = {
  args: {
    children: 'Button',
    variant: VARIANTS.OUTLINE_INFO
  },
};
export const OutlineDark: Story = {
  args: {
    children: 'Button',
    variant: VARIANTS.OUTLINE_DARK
  },
};
export const OutlineLight: Story = {
  args: {
    children: 'Button',
    variant: VARIANTS.OUTLINE_LIGHT
  },
};


export const PrimaryIcon: Story = {
  args: {
    children: 'Button',
    variant: VARIANTS.PRIMARY,
    icon: <WifiIcon
      className="w-6 h-6 text-white"
      aria-hidden="true"
    />,
    iconPosition: ICON_POSITIONS.LEFT
  },
};
export const OutlineIconSuccess: Story = {
  args: {
    children: 'Button',
    variant: VARIANTS.OUTLINE_SUCCESS,
    icon: <CheckIcon
      className="w-6 h-6 text-green-500"
      aria-hidden="true"
    />,
    iconPosition: ICON_POSITIONS.LEFT
  },
};
export const OutlineIconDanger: Story = {
  args: {
    children: 'Button',
    variant: VARIANTS.OUTLINE_DANGER,
    icon: <XMarkIcon
      className="w-6 h-6 text-red-500"
      aria-hidden="true"
    />,
    iconPosition: ICON_POSITIONS.LEFT
  },
};