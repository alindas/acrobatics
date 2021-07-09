
## Input 输入框

代码演示:

**提示内容上浮控件，可选large、middle、small三种尺寸**
```tsx
import React from 'react';
import { Input } from 'components';

export default () => {
  return (
   <div className="demo_wrapper">
      <div
        className="dark"
        style={{
          display: 'inline-block'
        }}
      >
        <Input
          title="Name"
          size="large"
          value="alindas"
          onChange={(val) => console.log(val)}
        />
        <Input
          title="Name"
          size="middle"
        />
        <Input
          title="Name"
          size="small"
        />
      </div>
   </div>
  )
}
```
