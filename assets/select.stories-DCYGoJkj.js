import{j as p}from"./jsx-runtime-u17CrQMm.js";import{r as S}from"./iframe-n-e8aWlb.js";import{S as d,m as g}from"./text-introduction-CgFCzlBe.js";import"./checkbox-NFvTgDd0.js";import"./icon-B6Z8uyC_.js";import"./well-BSPM537C.js";import"./paragraph-Cy9xlhY6.js";import"./summary-ajwk3kJ0.js";import"./text-area-BVJanjo5.js";import{S as t}from"./test-utils-CMDZRPRi.js";import"./preload-helper-lKO2eUTi.js";import"./index-bvxbNrh7.js";const h={title:"Components (Draft)/Selects/Single select",tags:["autodocs"],component:d,argTypes:{disabled:{control:"boolean"},isMulti:{control:"boolean"}}};function o({...e}){const[c,i]=S.useState(""),m=l=>{Array.isArray(l)||i(l?.value??"")};return p.jsx(g,{...e,value:c,onChange:m})}const r={render:e=>o(e),name:"Enabled",args:{id:"singleSelect",label:"Enabled",options:t}},n={render:e=>o(e),name:"Hover",args:{id:"singleSelect",label:"Hover",options:t,className:"hover"}},s={render:e=>o(e),name:"Focus",args:{id:"singleSelect",label:"Focus",options:t,className:"focus"}},a={render:e=>o(e),name:"Disabled",args:{id:"singleSelect",label:"Disabled",options:t,disabled:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: _arguments => SelectWrapper(_arguments),
  name: 'Enabled',
  args: {
    id: 'singleSelect',
    label: 'Enabled',
    options: SingleSelectOptions
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: _arguments => SelectWrapper(_arguments),
  name: 'Hover',
  args: {
    id: 'singleSelect',
    label: 'Hover',
    options: SingleSelectOptions,
    className: 'hover'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: _arguments => SelectWrapper(_arguments),
  name: 'Focus',
  args: {
    id: 'singleSelect',
    label: 'Focus',
    options: SingleSelectOptions,
    className: 'focus'
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: _arguments => SelectWrapper(_arguments),
  name: 'Disabled',
  args: {
    id: 'singleSelect',
    label: 'Disabled',
    options: SingleSelectOptions,
    disabled: true
  }
}`,...a.parameters?.docs?.source}}};const N=["SingleSelect","SingleSelectHover","SingleSelectFocus","SingleSelectDisabled"];export{r as SingleSelect,a as SingleSelectDisabled,s as SingleSelectFocus,n as SingleSelectHover,N as __namedExportsOrder,h as default};
