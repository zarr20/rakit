import { useState } from 'react';
import { TextField, Select, Button, Checkbox, Radio, Switch } from '@zarr20/rakit-ui';
import { Play, Layers, BookOpen } from 'lucide-react';
import { PlaygroundHeader } from '../../shared/components/PlaygroundHeader';
import { PropsTable } from '../../shared/components/PropsTable';
import {
  FieldSegmentNav,
  type FieldComponentSegment,
} from './partials/FieldSegmentNav';
import { AutocompleteSubPlayground } from './partials/AutocompleteSubPlayground';
import { TextFieldSubPlayground } from './partials/TextFieldSubPlayground';
import { SelectSubPlayground } from './partials/SelectSubPlayground';
import { MultiSelectSubPlayground } from './partials/MultiSelectSubPlayground';
import { TextAreaSubPlayground } from './partials/TextAreaSubPlayground';
import { CheckboxSubPlayground } from './partials/CheckboxSubPlayground';
import { RadioSubPlayground } from './partials/RadioSubPlayground';
import { SwitchSubPlayground } from './partials/SwitchSubPlayground';
import {
  TEXT_FIELD_PROPS,
  AUTOCOMPLETE_PROPS,
  SELECT_PROPS,
  MULTI_SELECT_PROPS,
  TEXT_AREA_PROPS,
  CHECKBOX_PROPS,
  RADIO_PROPS,
  SWITCH_PROPS,
} from './data/fieldProps';

export function FieldFeature() {
  const [fieldSegment, setFieldSegment] = useState<FieldComponentSegment>('autocomplete');

  return (
    <div className="space-y-12">
      <PlaygroundHeader
        title="Form Fields & Controls"
        tagline="Enterprise form control collection: Autocomplete, TextField, Select, MultiSelect, TextArea, Checkbox, Radio, and Switch."
        badge="Form Controls"
        importStatement="import { Autocomplete, TextField, Select, MultiSelect, TextArea, Checkbox, RadioGroup, Switch } from '@zarr20/rakit-ui';"
      />

      {/* Section 1: Interactive Sub Playgrounds per Component */}
      <section id="playground" className="space-y-6 scroll-mt-6">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Play className="w-4 h-4 text-emerald-600" />
            <h2 className="text-base font-display font-bold text-slate-900">
              Interactive Sandbox & Sub-Playgrounds
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">#playground</span>
        </div>

        {/* Horizontally Scrollable Segment Navigation */}
        <FieldSegmentNav
          activeSegment={fieldSegment}
          onChange={setFieldSegment}
        />

        {/* Selective Rendering: Only render active sub-playground */}
        {fieldSegment === 'autocomplete' && <AutocompleteSubPlayground />}
        {fieldSegment === 'textfield' && <TextFieldSubPlayground />}
        {fieldSegment === 'select' && <SelectSubPlayground />}
        {fieldSegment === 'multiselect' && <MultiSelectSubPlayground />}
        {fieldSegment === 'textarea' && <TextAreaSubPlayground />}
        {fieldSegment === 'checkbox' && <CheckboxSubPlayground />}
        {fieldSegment === 'radio' && <RadioSubPlayground />}
        {fieldSegment === 'switch' && <SwitchSubPlayground />}
      </section>

      {/* Section 2: Sizing Scale & Consistency Examples */}
      <section id="examples" className="space-y-6 scroll-mt-6 pt-10 border-t border-slate-200/80">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-600" />
            <h2 className="text-base font-display font-bold text-slate-900">
              Showcase & Sizing Scale Consistency
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">#examples</span>
        </div>

        <div className="space-y-10">
          {/* Sizing Hierarchy */}
          <div
            id="sizing-scale"
            data-toc-id="sizing-scale"
            data-toc-title="Uniform Sizing Scale"
            data-toc-level="2"
            className="space-y-4"
          >
            <div>
              <h3 className="text-base font-display font-semibold text-slate-900">
                Control Sizing Scale Uniformity (xs, sm, md, lg, xl)
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                All input controls (<code className="font-mono text-emerald-800">TextField</code>, <code className="font-mono text-emerald-800">Select</code>) and <code className="font-mono text-emerald-800">Button</code> share precise, harmonious heights, padding, font sizes, and radii when placed side-by-side.
              </p>
            </div>

            <div className="space-y-3 pt-1">
              {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((sz) => (
                <div key={sz} className="p-3.5 rounded-2xl border border-slate-200/90 bg-slate-50/50 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-700 uppercase">
                      Size: {sz}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      {sz === 'xs' ? 'h-7 / 28px' : sz === 'sm' ? 'h-8 / 32px' : sz === 'md' ? 'h-10 / 40px (Default)' : sz === 'lg' ? 'h-11 / 44px' : 'h-12 / 48px'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                    <div className="sm:col-span-5">
                      <TextField
                        size={sz}
                        placeholder={`TextField size="${sz}"...`}
                        defaultValue={`Input text (${sz})`}
                      />
                    </div>
                    <div className="sm:col-span-4">
                      <Select
                        size={sz}
                        options={['Alpha Option', 'Beta Option', 'Gamma Option']}
                        placeholder={`Select size="${sz}"`}
                        defaultValue="Alpha Option"
                      />
                    </div>
                    <div className="sm:col-span-3 flex items-center gap-2">
                      <Button size={sz} variant="primary" className="flex-1">
                        Submit
                      </Button>
                      <Button size={sz} variant="outline">
                        Cancel
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Selection Controls Built-in */}
          <div
            id="selection-controls"
            data-toc-id="selection-controls"
            data-toc-title="Selection Controls (Card & Default)"
            data-toc-level="2"
            className="space-y-4"
          >
            <div>
              <h3 className="text-base font-display font-semibold text-slate-900">
                Built-in Selection Controls (Switch, Checkbox, Radio)
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Pure default styles across 5 sizing tiers (xs–xl) with support for standard inline and interactive card variants.
              </p>
            </div>

            <div className="space-y-6 pt-1 divide-y divide-slate-100">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-slate-700 uppercase">
                  Sizing Scale (xs, sm, md, lg, xl)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 items-start">
                  {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((sz) => (
                    <div key={sz} className="p-3.5 rounded-2xl border border-slate-200/90 bg-slate-50/50 space-y-3">
                      <div className="text-[11px] font-mono font-semibold text-slate-500 uppercase">{sz}</div>
                      <div className="space-y-2">
                        <Checkbox size={sz} label={`Check ${sz}`} defaultChecked />
                        <Radio size={sz} name={`radio-sz-${sz}`} value="1" label={`Radio ${sz}`} defaultChecked />
                        <Switch size={sz} label={`Switch`} defaultChecked />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <span className="text-xs font-mono font-bold text-slate-700 uppercase">
                  Card Variant (Card-based Choices)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <Checkbox
                    variant="card"
                    size="sm"
                    label="Two-Factor Authentication"
                    description="Send OTP token via SMS or authenticator app."
                    defaultChecked
                  />
                  <Checkbox
                    variant="card"
                    size="sm"
                    label="Automated Cloud Backup"
                    description="Sync data every 24 hours to cold storage."
                  />
                  <Checkbox
                    variant="card"
                    size="sm"
                    label="Enterprise Audit Log Access"
                    description="Store access history for 365 days."
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: API Reference */}
      <section id="props" className="space-y-6 scroll-mt-6 pt-10 border-t border-slate-200/80">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-emerald-600" />
            <h2 className="text-base font-display font-bold text-slate-900">
              API Reference & Props
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">#props</span>
        </div>

        <div className="space-y-8">
          <div
            id="props-autocomplete"
            data-toc-id="props-autocomplete"
            data-toc-title="Props Autocomplete"
            data-toc-level="2"
            className="space-y-3"
          >
            <h3 className="text-sm font-semibold text-slate-800">
              Props &lt;Autocomplete /&gt;
            </h3>
            <PropsTable props={AUTOCOMPLETE_PROPS} />
          </div>

          <div
            id="props-textfield"
            data-toc-id="props-textfield"
            data-toc-title="Props TextField"
            data-toc-level="2"
            className="space-y-3"
          >
            <h3 className="text-sm font-semibold text-slate-800">
              Props &lt;TextField /&gt;
            </h3>
            <PropsTable props={TEXT_FIELD_PROPS} />
          </div>

          <div
            id="props-select"
            data-toc-id="props-select"
            data-toc-title="Props Select"
            data-toc-level="2"
            className="space-y-3"
          >
            <h3 className="text-sm font-semibold text-slate-800">
              Props &lt;Select /&gt;
            </h3>
            <PropsTable props={SELECT_PROPS} />
          </div>

          <div
            id="props-multiselect"
            data-toc-id="props-multiselect"
            data-toc-title="Props MultiSelect"
            data-toc-level="2"
            className="space-y-3"
          >
            <h3 className="text-sm font-semibold text-slate-800">
              Props &lt;MultiSelect /&gt;
            </h3>
            <PropsTable props={MULTI_SELECT_PROPS} />
          </div>

          <div
            id="props-textarea"
            data-toc-id="props-textarea"
            data-toc-title="Props TextArea"
            data-toc-level="2"
            className="space-y-3"
          >
            <h3 className="text-sm font-semibold text-slate-800">
              Props &lt;TextArea /&gt;
            </h3>
            <PropsTable props={TEXT_AREA_PROPS} />
          </div>

          <div
            id="props-checkbox"
            data-toc-id="props-checkbox"
            data-toc-title="Props Checkbox"
            data-toc-level="2"
            className="space-y-3"
          >
            <h3 className="text-sm font-semibold text-slate-800">
              Props &lt;Checkbox /&gt;
            </h3>
            <PropsTable props={CHECKBOX_PROPS} />
          </div>

          <div
            id="props-radiogroup"
            data-toc-id="props-radiogroup"
            data-toc-title="Props RadioGroup"
            data-toc-level="2"
            className="space-y-3"
          >
            <h3 className="text-sm font-semibold text-slate-800">
              Props &lt;RadioGroup /&gt;
            </h3>
            <PropsTable props={RADIO_PROPS} />
          </div>

          <div
            id="props-switch"
            data-toc-id="props-switch"
            data-toc-title="Props Switch"
            data-toc-level="2"
            className="space-y-3"
          >
            <h3 className="text-sm font-semibold text-slate-800">
              Props &lt;Switch /&gt;
            </h3>
            <PropsTable props={SWITCH_PROPS} />
          </div>
        </div>
      </section>
    </div>
  );
}
