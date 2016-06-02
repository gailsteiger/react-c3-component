import test from 'ava'
import expect from 'expect'
import { mount } from 'enzyme'
import React from 'react'
import Chart from './Chart'

test(() => {
  const wrapper = mount(
    <Chart config={{
      data: {
        columns: [
          ['data1', 30, 200, 100, 400, 150, 250],
          ['data2', 50, 20, 10, 40, 15, 25]
        ]
      }
    }} />
  )

  expect(wrapper.find('div')).toExist()
})
