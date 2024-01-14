import{j as e,a as n,F as i}from"./jsx-runtime-5BUNAZ9W.js";import{r as m}from"./index-4g5l5LRQ.js";import{u as Se,C as pe}from"./index.esm-rcUR5vC1.js";import{S as a}from"./saturation-slider-nB5j5OsN.js";import{T as d}from"./text-iDDnHZIy.js";import{W as T}from"./flex-_Q70eOee.js";import{V as F}from"./stack-_c9sAZKA.js";import{B as S}from"./button-cMSAhBpk.js";import{F as B}from"./form-control-9XpnQ7XD.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-jXL2Te6W.js";import"./factory-_mTQY6PK.js";import"./index-L9hw7aoW.js";import"./number-RReIgE2V.js";import"./theme-provider-XorC6D0y.js";import"./forward-ref-A-8Arhkk.js";import"./use-component-style-lJBCD4Hi.js";import"./use-ripple-NMzR3tTC.js";import"./index-eMn_GZVX.js";import"./motion-heeYkzTb.js";import"./motion-V5SSOO6i.js";import"./loading-MtZqCvSr.js";import"./index-z6pzycMb.js";import"./index-Qpz5-nu_.js";import"./index-nv1zPk__.js";import"./icon-_12WOtQg.js";const Ie={title:"Components / Forms / SaturationSlider",component:a},h=()=>e(a,{}),g=()=>e(a,{defaultValue:[320,1,1]}),f=()=>n(i,{children:[e(a,{size:"sm",defaultValue:[120,.33,.33]}),e(a,{size:"md",defaultValue:[180,.66,.66]}),e(a,{size:"lg",defaultValue:[240,1,1]})]}),C=()=>{const[r,t]=m.useState([180,1,1]);return n(i,{children:[n(d,{children:["Value: ",JSON.stringify(r)]}),e(a,{value:r,step:.1,onChange:t})]})},v=()=>{const[r,t]=m.useState([180,1,1]),[,s,l]=r,u=(D,p)=>{const o=D==="s"?1:2;t(c=>(p==="increment"?c[o]!==1&&(c[o]=Math.round((c[o]+.1)*10)/10):c[o]!==0&&(c[o]=Math.round((c[o]-.1)*10)/10),[...c]))};return n(i,{children:[n(d,{children:["Value: ",JSON.stringify(r)]}),e(a,{value:r,step:10,focusThumbOnChange:!1}),n(T,{gap:"md",children:[n(F,{w:"auto",gap:"sm",children:[e(d,{children:"Saturation"}),n(T,{gap:"md",children:[e(S,{isDisabled:s===0,onClick:()=>u("s","decrement"),children:"-0.1"}),e(S,{isDisabled:s===1,colorScheme:"blue",onClick:()=>u("s","increment"),children:"+0.1"})]})]}),n(F,{w:"auto",gap:"sm",children:[e(d,{children:"Brightness"}),n(T,{gap:"md",children:[e(S,{isDisabled:l===0,onClick:()=>u("v","decrement"),children:"-0.1"}),e(S,{isDisabled:s===1,colorScheme:"blue",onClick:()=>u("v","increment"),children:"+0.1"})]})]})]})]})},b=()=>e(a,{withShadow:!1}),V=()=>n(i,{children:[e(a,{isDisabled:!0}),e(B,{isDisabled:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e(a,{})})]}),y=()=>n(i,{children:[e(a,{isReadOnly:!0}),e(B,{isReadOnly:!0,label:"Pick color",helperMessage:"Please select your favorite color",children:e(a,{})})]}),k=()=>{const[r,t]=m.useState([180,1,1]);return n(i,{children:[n(d,{children:["Value: ",JSON.stringify(r)]}),e(a,{value:r,onChange:t})]})},w=()=>{const[r,t]=m.useState([180,1,1]),[s,l]=m.useState([180,1,1]);return n(i,{children:[n(d,{children:["Value: ",JSON.stringify(r),", Start Value:"," ",JSON.stringify(s)]}),e(a,{value:r,onChange:t,onChangeStart:l})]})},O=()=>{const[r,t]=m.useState([180,1,1]),[s,l]=m.useState([180,1,1]);return n(i,{children:[n(d,{children:["Value: ",JSON.stringify(r),", End Value: ",JSON.stringify(s)]}),e(a,{value:r,onChange:t,onChangeEnd:l})]})},x=()=>{var p;const r={saturationSlider:[180,1,1]},{control:t,handleSubmit:s,watch:l,formState:{errors:u}}=Se({defaultValues:r}),D=o=>console.log("submit:",o);return console.log("watch:",l()),n(F,{as:"form",onSubmit:s(D),children:[e(B,{isInvalid:!!u.saturationSlider,label:"Pick color",errorMessage:(p=u.saturationSlider)==null?void 0:p.message,children:e(pe,{name:"saturationSlider",control:t,render:({field:o})=>e(a,{...o})})}),e(S,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var J,N,E;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <SaturationSlider />;
}`,...(E=(N=h.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var H,M,P;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  return <SaturationSlider defaultValue={[320, 1, 1]} />;
}`,...(P=(M=g.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var z,W,R;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  return <>
      <SaturationSlider size="sm" defaultValue={[120, 0.33, 0.33]} />
      <SaturationSlider size="md" defaultValue={[180, 0.66, 0.66]} />
      <SaturationSlider size="lg" defaultValue={[240, 1, 1]} />
    </>;
}`,...(R=(W=f.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var j,I,_;C.parameters={...C.parameters,docs:{...(j=C.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<Hsv>([180, 1, 1]);
  return <>
      <Text>Value: {JSON.stringify(value)}</Text>
      <SaturationSlider value={value} step={0.1} onChange={onChange} />
    </>;
}`,...(_=(I=C.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var q,A,G;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<Hsv>([180, 1, 1]);
  const [, s, v] = value;
  const onChange = (space: "s" | "v", type: "increment" | "decrement") => {
    const i = space === "s" ? 1 : 2;
    setValue(prev => {
      if (type === "increment") {
        if (prev[i] !== 1) prev[i] = Math.round((prev[i] + 0.1) * 10) / 10;
      } else {
        if (prev[i] !== 0) prev[i] = Math.round((prev[i] - 0.1) * 10) / 10;
      }
      return [...prev];
    });
  };
  return <>
      <Text>Value: {JSON.stringify(value)}</Text>
      <SaturationSlider value={value} step={10} focusThumbOnChange={false} />

      <Wrap gap="md">
        <VStack w="auto" gap="sm">
          <Text>Saturation</Text>

          <Wrap gap="md">
            <Button isDisabled={s === 0} onClick={() => onChange("s", "decrement")}>
              -0.1
            </Button>

            <Button isDisabled={s === 1} colorScheme="blue" onClick={() => onChange("s", "increment")}>
              +0.1
            </Button>
          </Wrap>
        </VStack>

        <VStack w="auto" gap="sm">
          <Text>Brightness</Text>

          <Wrap gap="md">
            <Button isDisabled={v === 0} onClick={() => onChange("v", "decrement")}>
              -0.1
            </Button>

            <Button isDisabled={s === 1} colorScheme="blue" onClick={() => onChange("v", "increment")}>
              +0.1
            </Button>
          </Wrap>
        </VStack>
      </Wrap>
    </>;
}`,...(G=(A=v.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var K,L,Q;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <SaturationSlider withShadow={false} />;
}`,...(Q=(L=b.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};var U,X,Y;V.parameters={...V.parameters,docs:{...(U=V.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  return <>
      <SaturationSlider isDisabled />

      <FormControl isDisabled label="Pick color" helperMessage="Please select your favorite color">
        <SaturationSlider />
      </FormControl>
    </>;
}`,...(Y=(X=V.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <>
      <SaturationSlider isReadOnly />

      <FormControl isReadOnly label="Pick color" helperMessage="Please select your favorite color">
        <SaturationSlider />
      </FormControl>
    </>;
}`,...(ee=($=y.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ne,re,ae;k.parameters={...k.parameters,docs:{...(ne=k.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<Hsv>([180, 1, 1]);
  return <>
      <Text>Value: {JSON.stringify(value)}</Text>
      <SaturationSlider value={value} onChange={onChange} />
    </>;
}`,...(ae=(re=k.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var te,oe,se;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<Hsv>([180, 1, 1]);
  const [startValue, onChangeStart] = useState<Hsv>([180, 1, 1]);
  return <>
      <Text>
        Value: {JSON.stringify(value)}, Start Value:{" "}
        {JSON.stringify(startValue)}
      </Text>
      <SaturationSlider value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>;
}`,...(se=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ie,le,ue;O.parameters={...O.parameters,docs:{...(ie=O.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<Hsv>([180, 1, 1]);
  const [endValue, onChangeEnd] = useState<Hsv>([180, 1, 1]);
  return <>
      <Text>
        Value: {JSON.stringify(value)}, End Value: {JSON.stringify(endValue)}
      </Text>
      <SaturationSlider value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...(ue=(le=O.parameters)==null?void 0:le.docs)==null?void 0:ue.source}}};var ce,de,me;x.parameters={...x.parameters,docs:{...(ce=x.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  type Data = {
    saturationSlider: Hsv;
  };
  const defaultValues: Data = {
    saturationSlider: [180, 1, 1]
  };
  const {
    control,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = useForm<Data>({
    defaultValues
  });
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.saturationSlider} label="Pick color" errorMessage={errors.saturationSlider?.message}>
        <Controller name="saturationSlider" control={control} render={({
        field
      }) => <SaturationSlider {...field} />} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(me=(de=x.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};const _e=["basic","withDefaultValue","withSize","withStep","withFocusThumbOnChange","disabledShadow","isDisabled","isReadonly","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{_e as __namedExportsOrder,h as basic,k as customControl,Ie as default,b as disabledShadow,V as isDisabled,y as isReadonly,O as onChangeEnd,w as onChangeStart,x as reactHookForm,g as withDefaultValue,v as withFocusThumbOnChange,f as withSize,C as withStep};
