import { useState } from 'react';
import {
  Heading,
  Text,
  Paragraph,
  Kbd,
  CodeText,
  Blockquote,
  LinkText,
  Select,
  type HeadingLevel,
  type HeadingSize,
  type TextSize,
  type TextWeight,
  type TextColor,
  type TextVariant,
} from '@zarr20/rakit-ui';
import { PlaygroundHeader } from '../../shared/components/PlaygroundHeader';
import { PropControls } from '../../shared/components/prop-controls/PropControls';
import { PropsTable } from '../../shared/components/PropsTable';
import { HEADING_PROPS, TEXT_PROPS, PARAGRAPH_PROPS } from './data/typographyProps';
import { Play, Layers, BookOpen } from 'lucide-react';

export function TypographyFeature() {
  // Interactive Heading State
  const [headingLevel, setHeadingLevel] = useState<HeadingLevel>('h2');
  const [headingSize, setHeadingSize] = useState<HeadingSize>('2xl');
  const [headingColor, setHeadingColor] = useState<TextColor>('default');
  const [headingText, setHeadingText] = useState('Build Enterprise Web Apps with Rakit');

  // Interactive Text State
  const [textSize, setTextSize] = useState<TextSize>('md');
  const [textWeight, setTextWeight] = useState<TextWeight>('normal');
  const [textColor, setTextColor] = useState<TextColor>('secondary');
  const [textVariant, setTextVariant] = useState<TextVariant>('body');
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isMark, setIsMark] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isTruncate, setIsTruncate] = useState(false);
  const [textContent, setTextContent] = useState(
    'Rakit UI provides consistent, scalable typographic primitives designed for high-density enterprise dashboards.'
  );

  const headingSizes: HeadingSize[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'];
  const textSizes: TextSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];
  const textWeights: TextWeight[] = ['light', 'normal', 'medium', 'semibold', 'bold', 'extrabold'];
  const textVariants: TextVariant[] = ['body', 'lead', 'caption', 'label', 'mono'];
  const textColors: TextColor[] = [
    'default',
    'secondary',
    'muted',
    'primary',
    'success',
    'warning',
    'danger',
    'info',
  ];

  const generateCode = () => {
    return `import { Heading, Text, Paragraph, Kbd, CodeText, Blockquote, LinkText } from '@zarr20/rakit-ui';

// 1. Heading Example
<Heading as="${headingLevel}" size="${headingSize}" color="${headingColor}">
  ${headingText}
</Heading>

// 2. Text Example
<Text
  size="${textSize}"
  weight="${textWeight}"
  color="${textColor}"
  variant="${textVariant}"${isItalic ? '\n  italic' : ''}${isUnderline ? '\n  underline' : ''}${isMark ? '\n  mark' : ''}${isDeleted ? '\n  delete' : ''}${isTruncate ? '\n  truncate' : ''}
>
  ${textContent}
</Text>

// 3. Inline Code & Keyboard Key
<p>
  Press <Kbd>Ctrl</Kbd> + <Kbd>K</Kbd> to open search or inspect <CodeText>config.json</CodeText>.
</p>

// 4. Blockquote
<Blockquote author="Rakit Architecture Team">
  Clean design systems prioritize consistency, rhythm, and clarity over unnecessary noise.
</Blockquote>`;
  };

  return (
    <div className="space-y-12">
      <PlaygroundHeader
        title="Typography"
        tagline="Structured typography primitives: Headings with Space Grotesk display scale, semantic Text variants, Paragraphs, Keyboard shortcuts, Inline code, Blockquotes, and Links."
        badge="General"
        importStatement="import { Heading, Text, Paragraph, Kbd, CodeText, Blockquote, LinkText, Typography } from '@zarr20/rakit-ui';"
      />

      {/* Section 1: Interactive Sandbox */}
      <section id="playground" className="space-y-6 scroll-mt-6">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Play className="w-4 h-4 text-emerald-600" />
            <h2 className="text-base font-display font-bold text-slate-900">
              Interactive Typography Sandbox
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">#playground</span>
        </div>

        {/* Responsive Full-Width Studio Layout */}
        <div className="space-y-4">
          {/* 1. Full-Width Preview Canvas */}
          <PropControls.Canvas
            codeSnippet={generateCode()}
            onReset={() => {
              setHeadingLevel('h2');
              setHeadingSize('2xl');
              setHeadingColor('default');
              setHeadingText('Build Enterprise Web Apps with Rakit');
              setTextSize('md');
              setTextWeight('normal');
              setTextColor('secondary');
              setTextVariant('body');
              setIsItalic(false);
              setIsUnderline(false);
              setIsMark(false);
              setIsDeleted(false);
              setIsTruncate(false);
              setTextContent('Rakit UI provides consistent, scalable typographic primitives designed for high-density enterprise dashboards.');
            }}
            componentId="typography-basic"
          >
            <div className="w-full max-w-2xl py-6 px-4 space-y-4 text-left">
              <Heading as={headingLevel} size={headingSize} color={headingColor}>
                {headingText}
              </Heading>

              <Text
                size={textSize}
                weight={textWeight}
                color={textColor}
                variant={textVariant}
                italic={isItalic}
                underline={isUnderline}
                mark={isMark}
                delete={isDeleted}
                truncate={isTruncate}
              >
                {textContent}
              </Text>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-3 text-sm">
                <span className="text-slate-500 text-xs font-medium uppercase tracking-wider">Inline Helpers:</span>
                <span className="flex items-center gap-1.5">
                  <Kbd>⌘</Kbd>
                  <Kbd>K</Kbd>
                </span>
                <CodeText>rakit.config.ts</CodeText>
                <LinkText href="#" external>
                  View Guide
                </LinkText>
              </div>
            </div>
          </PropControls.Canvas>

          {/* 2. Responsive Controls Panel */}
          <PropControls title="Typography Props Configuration" columns={2}>
            <PropControls.Text
              label="Heading Content"
              value={headingText}
              onChange={setHeadingText}
            />

            <PropControls.Segmented
              label="Tag Level"
              items={[
                { value: 'h1', label: 'H1' },
                { value: 'h2', label: 'H2' },
                { value: 'h3', label: 'H3' },
                { value: 'h4', label: 'H4' },
                { value: 'h5', label: 'H5' },
                { value: 'h6', label: 'H6' },
              ]}
              value={headingLevel}
              onChange={(val) => setHeadingLevel(val as HeadingLevel)}
              size="xs"
            />

            <PropControls.Item label="Visual Size & Color">
              <div className="grid grid-cols-2 gap-2">
                <Select
                  value={headingSize}
                  onChange={(val) => setHeadingSize(val as HeadingSize)}
                  options={headingSizes.map((s) => ({ label: s.toUpperCase(), value: s }))}
                  size="xs"
                />
                <Select
                  value={headingColor}
                  onChange={(val) => setHeadingColor(val as TextColor)}
                  options={textColors.map((c) => ({ label: c, value: c }))}
                  size="xs"
                />
              </div>
            </PropControls.Item>

            <PropControls.Text
              label="Text Content"
              value={textContent}
              onChange={setTextContent}
            />

            <PropControls.Item label="Text Size & Weight">
              <div className="grid grid-cols-2 gap-2">
                <Select
                  value={textSize}
                  onChange={(val) => setTextSize(val as TextSize)}
                  options={textSizes.map((s) => ({ label: s.toUpperCase(), value: s }))}
                  size="xs"
                />
                <Select
                  value={textWeight}
                  onChange={(val) => setTextWeight(val as TextWeight)}
                  options={textWeights.map((w) => ({ label: w, value: w }))}
                  size="xs"
                />
              </div>
            </PropControls.Item>

            <PropControls.Item label="Variant & Color">
              <div className="grid grid-cols-2 gap-2">
                <Select
                  value={textVariant}
                  onChange={(val) => setTextVariant(val as TextVariant)}
                  options={textVariants.map((v) => ({ label: v, value: v }))}
                  size="xs"
                />
                <Select
                  value={textColor}
                  onChange={(val) => setTextColor(val as TextColor)}
                  options={textColors.map((c) => ({ label: c, value: c }))}
                  size="xs"
                />
              </div>
            </PropControls.Item>

            <div className="col-span-1 sm:col-span-2 xl:col-span-3">
              <PropControls.Item label="Formatting & Toggles">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 pt-1">
                  <PropControls.Toggle
                    label="Italic"
                    checked={isItalic}
                    onChange={setIsItalic}
                  />
                  <PropControls.Toggle
                    label="Underline"
                    checked={isUnderline}
                    onChange={setIsUnderline}
                  />
                  <PropControls.Toggle
                    label="Mark / Highlight"
                    checked={isMark}
                    onChange={setIsMark}
                  />
                  <PropControls.Toggle
                    label="Line-through"
                    checked={isDeleted}
                    onChange={setIsDeleted}
                  />
                  <PropControls.Toggle
                    label="Truncate"
                    checked={isTruncate}
                    onChange={setIsTruncate}
                  />
                </div>
              </PropControls.Item>
            </div>
          </PropControls>

          {/* 3. Code Generator */}
          <PropControls.Code codeSnippet={generateCode()} />
        </div>
      </section>

      {/* Section 2: Examples */}
      <section
        id="examples"
        className="space-y-8 scroll-mt-6 pt-10 border-t border-slate-200/80"
        data-toc-title="Variants & Scenarios"
        data-toc-level="1"
      >
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-600" />
            <h2 className="text-base font-display font-bold text-slate-900">
              Variants & Usage Scenarios
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">#examples</span>
        </div>

        <div className="space-y-8">
          {/* Sub-content 1: Heading Scale */}
          <div
            id="heading-hierarchy"
            className="space-y-3 scroll-mt-6"
            data-toc-title="Heading Hierarchy"
            data-toc-level="2"
          >
            <div>
              <h3 className="text-base font-display font-semibold text-slate-900">
                Heading Hierarchy (Space Grotesk Display)
              </h3>
              <p className="text-xs text-slate-500">
                Proportional visual heading scale from 4XL down to MD.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200/90 bg-slate-50/50 space-y-4 divide-y divide-slate-200/60">
              <div className="pt-2">
                <div className="text-xs text-slate-400 font-mono mb-1">Heading as="h1" size="4xl"</div>
                <Heading as="h1" size="4xl">Display Title 4XL</Heading>
              </div>
              <div className="pt-3">
                <div className="text-xs text-slate-400 font-mono mb-1">Heading as="h2" size="3xl"</div>
                <Heading as="h2" size="3xl">Section Title 3XL</Heading>
              </div>
              <div className="pt-3">
                <div className="text-xs text-slate-400 font-mono mb-1">Heading as="h3" size="2xl"</div>
                <Heading as="h3" size="2xl">Subsection Heading 2XL</Heading>
              </div>
              <div className="pt-3">
                <div className="text-xs text-slate-400 font-mono mb-1">Heading as="h4" size="xl"</div>
                <Heading as="h4" size="xl">Component Group XL</Heading>
              </div>
              <div className="pt-3">
                <div className="text-xs text-slate-400 font-mono mb-1">Heading as="h5" size="lg"</div>
                <Heading as="h5" size="lg">Card Header Title LG</Heading>
              </div>
              <div className="pt-3">
                <div className="text-xs text-slate-400 font-mono mb-1">Heading as="h6" size="md"</div>
                <Heading as="h6" size="md">Micro Heading MD</Heading>
              </div>
            </div>
          </div>

          {/* Sub-content 2: Text Variants */}
          <div
            id="text-variants"
            className="space-y-3 scroll-mt-6"
            data-toc-title="Text Variants & Formats"
            data-toc-level="2"
          >
            <div>
              <h3 className="text-base font-display font-semibold text-slate-900">
                Text Variants & Formats
              </h3>
              <p className="text-xs text-slate-500">
                Semantic variants for body, lead, label, caption, and monospace code.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200/90 bg-slate-50/50 space-y-4">
              <div>
                <span className="text-xs font-mono text-slate-400 block mb-1">variant="lead"</span>
                <Paragraph lead>
                  This is a lead paragraph designed for section introductions and editorial decks, with comfortable line height and relaxed reading cadence.
                </Paragraph>
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 block mb-1">variant="body"</span>
                <Paragraph>
                  Standard body text handles long-form reading gracefully with contrast tailored for both light and dark themes across dense enterprise tables and forms.
                </Paragraph>
              </div>
              <div className="flex flex-wrap items-center gap-6 pt-2">
                <div>
                  <span className="text-xs font-mono text-slate-400 block mb-1">variant="label"</span>
                  <Text variant="label">System Metrics</Text>
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block mb-1">variant="caption"</span>
                  <Text variant="caption">Updated 2 minutes ago via WebSocket</Text>
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block mb-1">variant="mono"</span>
                  <Text variant="mono">sha256:7f83b1657ff1fc53b92</Text>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-content 3: Blockquote & Links */}
          <div
            id="blockquotes-links"
            className="space-y-3 scroll-mt-6"
            data-toc-title="Blockquotes & Inline"
            data-toc-level="2"
          >
            <div>
              <h3 className="text-base font-display font-semibold text-slate-900">
                Blockquotes, Links & Inline Primitives
              </h3>
              <p className="text-xs text-slate-500">
                Citations, keyboard shortcut caps, and semantic link elements.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200/90 bg-slate-50/50 space-y-6">
              <Blockquote author="Edsger W. Dijkstra" color="primary">
                Simplicity is prerequisite for reliability.
              </Blockquote>

              <Blockquote author="Rakit UX Guidelines" cite="Design Principles" color="slate">
                Enterprise UI should be predictable, responsive, and visually harmonious across all component boundaries.
              </Blockquote>

              <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-6">
                <div className="space-y-2">
                  <div className="text-xs font-medium text-slate-500">Keyboard Shortcuts:</div>
                  <div className="flex items-center gap-2">
                    <Kbd size="xs">Esc</Kbd>
                    <Kbd size="sm">Tab</Kbd>
                    <Kbd size="md">Ctrl + Shift + P</Kbd>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-medium text-slate-500">Semantic Links:</div>
                  <div className="flex items-center gap-4">
                    <LinkText href="#" underline="hover">
                      Internal Dashboard
                    </LinkText>
                    <LinkText href="https://github.com" external underline="always">
                      External Repository
                    </LinkText>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: API Reference */}
      <section
        id="props"
        className="space-y-8 scroll-mt-6 pt-10 border-t border-slate-200/80"
        data-toc-title="Props Reference"
        data-toc-level="1"
      >
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-emerald-600" />
            <h2 className="text-base font-display font-bold text-slate-900">
              Props Reference
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">#props</span>
        </div>

        <div className="space-y-8">
          <div
            id="props-heading"
            className="space-y-3 scroll-mt-6"
            data-toc-title="Heading Props"
            data-toc-level="2"
          >
            <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-slate-600">
              Heading Props
            </h3>
            <PropsTable props={HEADING_PROPS} />
          </div>

          <div
            id="props-text"
            className="space-y-3 scroll-mt-6"
            data-toc-title="Text Props"
            data-toc-level="2"
          >
            <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-slate-600">
              Text Props
            </h3>
            <PropsTable props={TEXT_PROPS} />
          </div>

          <div
            id="props-paragraph"
            className="space-y-3 scroll-mt-6"
            data-toc-title="Paragraph Props"
            data-toc-level="2"
          >
            <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-slate-600">
              Paragraph Props
            </h3>
            <PropsTable props={PARAGRAPH_PROPS} />
          </div>
        </div>
      </section>
    </div>
  );
}
