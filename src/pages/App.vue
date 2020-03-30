<template>
    <Fragment>
      <GlobalStyle/>
      <Content>
        <h1 class="bin2-title">Bin2Dec</h1>
        <p></p>
        <div>
          <div class="bin2-block-input">
            <div class="bin2-input-box">
              <p  class="bin2-inputWarning">{{ onlyBin(bin)  ? 'Binary number only' : ''  }}</p>
              <input v-model="bin" :maxlength="8" @keypress="onlyNumber" class="bin-input-custom" type="text"/>
              <!--  <at-input type="text" @keypress="onlynumber"  :maxlength="8" :status="parserBinInput(bin) ? 'error' : 'info'" class="bin2-input" v-model="bin"  placeholder="Binary number"></at-input> -->
            </div>
            <div class="bin2-result-block">
              <h2 class="bin-resulttitle">Result is: </h2>
              <h2  class="bin2-result">{{ isNumber(bin) ? parserBin(bin) : '' }}</h2>
            </div>
          </div>
        </div>
      </Content>
    </Fragment>
</template>

<script>

import GlobalStyle from './styles/global'

import { Fragment } from 'vue-fragment'
import { Content } from './styles/styles'
import { onlyNumber, onlyBin, isNumber, parserBin } from './../modules/functions'

export default {
  components: {
    GlobalStyle,
    Fragment,
    Content,
  },
  methods: {
    isNumber,
    parserBin,
    onlyBin,
    onlyNumber
  },
  data() {
    return {
      bin: "0",
      isNumberData: true
    }
  }
}
</script>


