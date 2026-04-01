import defaultMdxComponents from '@fumadocs/base-ui/mdx';
import * as FilesComponents from '@fumadocs/base-ui/components/files';
import * as TabsComponents from '@fumadocs/base-ui/components/tabs';
import type { MDXComponents } from 'mdx/types';
import { Accordion, Accordions } from '@fumadocs/base-ui/components/accordion';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    ...TabsComponents,
    ...FilesComponents,
    Accordion,
    Accordions,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
