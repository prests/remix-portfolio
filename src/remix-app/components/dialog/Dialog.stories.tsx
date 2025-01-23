import { useEffect, useState } from 'react';
import { Controls, Description, Primary, Stories, Subtitle, Title } from '@storybook/blocks';

import Button from '../button/Button';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './Dialog';

import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  tags: ['!autodocs'],
  render: function Render() {
    const [container, setContainer] = useState<HTMLElement | null>(null);

    useEffect(() => {
      setContainer(document.getElementById('default-target'));
    }, []);

    return (
      <>
        <div id="default-target" />
        <Dialog>
          <DialogTrigger asChild>
            <Button>OPEN DIALOG</Button>
          </DialogTrigger>

          <DialogContent container={container}>
            <DialogHeader>
              <DialogTitle>Title</DialogTitle>
              <DialogDescription>Description</DialogDescription>
            </DialogHeader>

            <Button>Content</Button>
          </DialogContent>
        </Dialog>
      </>
    );
  },
};

export const ForceFullscreen: Story = {
  render: function Render() {
    const [container, setContainer] = useState<HTMLElement | null>(null);

    useEffect(() => {
      setContainer(document.getElementById('fullscreen-target'));
    }, []);

    return (
      <>
        <div id="fullscreen-target" />
        <Dialog>
          <DialogTrigger asChild>
            <Button>OPEN DIALOG</Button>
          </DialogTrigger>

          <DialogContent variant="fullscreen" container={container}>
            <DialogHeader>
              <DialogTitle>Title</DialogTitle>
              <DialogDescription>Description</DialogDescription>
            </DialogHeader>

            <Button>Content</Button>
          </DialogContent>
        </Dialog>
      </>
    );
  },
};

export const CustomCloseButton: Story = {
  render: function Render() {
    const [container, setContainer] = useState<HTMLElement | null>(null);

    useEffect(() => {
      setContainer(document.getElementById('custom-close-target'));
    }, []);

    return (
      <>
        <div id="custom-close-target" />
        <Dialog>
          <DialogTrigger asChild>
            <Button>OPEN DIALOG</Button>
          </DialogTrigger>

          <DialogContent container={container} isCloseOverriden>
            <DialogHeader>
              <DialogTitle>Title</DialogTitle>
              <DialogDescription>Description</DialogDescription>
            </DialogHeader>

            <Button>Content</Button>

            <DialogClose asChild>
              <Button variant="outline">Close Me</Button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      </>
    );
  },
};

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
    docs: {
      toc: true,
      page: () => (
        <>
          <Title />
          <Subtitle>
            <strong>
              NOTE: Due to limitations of storybook and the theme provider please open dialog components in their
              standalone story page when testing.
            </strong>
          </Subtitle>
          <Description />
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;
export default meta;
