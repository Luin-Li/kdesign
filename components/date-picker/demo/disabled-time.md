---
title: 时间选择器
order: 9
---

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { DatePicker } from '@kdcloudjs/kdesign'

function Demo() {
  const demoStyle = { margin: '10px 0' }
  return (
    <div  style={{ width: '150px' }}>
      <div>
        <DatePicker picker="time" />
      </div>
      <div>
        <DatePicker picker="time" disabledHours={() => [0, 1, 2, 3]} />
      </div>
      <div>
        <DatePicker
          picker="time"
          disabledHours={() => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]}
        />
      </div>
      <div>
        <DatePicker
          picker="time"
          use12Hours
          disabledHours={() => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
          disabledMinutes={() => [0, 1, 2, 3, 4]}
          disabledSeconds={() => [18, 19, 20]}
        />
      </div>
    </div>
  )
}

ReactDOM.render(<Demo />, mountNode)
```
