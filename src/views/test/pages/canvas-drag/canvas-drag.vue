<template>
  <div>
    <div style="border: 1px solid forestgreen; display: inline-block">
      <canvas ref="canvasDrag" width="750px" height="300px"></canvas>
    </div>
    <div class="dib setArea" v-show="curData">
      <el-form inline>
        <el-form-item label="热区连接">
          <el-input :value="curData ? curData.link : ''" @input="linkInput"></el-input>
        </el-form-item>
        <el-fomr-item>
          <div class="size-control">
            <el-button-group>
              <el-button size="small" type="primary" @click="setSize('back')"><i class="el-icon-minus"></i></el-button>
              <el-button size="small"><i class="el-icon-search"></i></el-button>
              <el-button size="small" type="primary" @click="setSize('go')"><i class="el-icon-plus"></i>
              </el-button>
            </el-button-group>
            <div style="margin: 10px;">{{(controlSize*100).toFixed(0)}}%</div>
          </div>
        </el-fomr-item>
      </el-form>
    </div>
    <div>
      <br>
      <button @click="handleAdd">添加热点</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "canvas-drag",
    data: function () {
      return {
        ctx: null,
        canva: null,
        rectList: [],
        currentR: null,
        curData: null,
        controlSize: 1,
      }
    },
    mounted() {
      const _this = this
      const canva = this.$refs.canvasDrag
      const canvasText = canva.getContext('2d')
      this.ctx = canvasText
      this.canva = canva
      canva.addEventListener('click', function () {})
      canva.addEventListener('mousedown', function (e) {
        if (_this.currentR) {
          _this.currentR.isCurrent = false
        }
        _this.reDraw(e)
      })
      canva.addEventListener('mousemove', function (e) {
        if (_this.currentR) {
          const currentRect = _this.currentR
          _this.setAreaLimit(currentRect, e)
          // currentRect.x = e.clientX - _this.canva.offsetLeft - (currentRect.w/2)
          // currentRect.y = e.clientY - _this.canva.offsetTop - (currentRect.h/2)
          _this.reDraw(e)
        }
      })
      canva.addEventListener('mouseup', function () {
        if (_this.currentR) {
          _this.currentData(_this.currentR)
          _this.controlSize = _this.currentR.zoomRadio
          _this.currentR.isCurrent = false
        }
        _this.currentR = null
      })

      this.draw(0, 0)
    },
    methods: {
      // 在canvas 范围内拖拽
      setAreaLimit(cur, e) {
        cur.x = e.clientX - this.canva.offsetLeft - (cur.w / 2)
        cur.y = e.clientY - this.canva.offsetTop - (cur.h / 2)
        if (e.clientX >= (this.canva.offsetLeft + this.canva.width - cur.w / 2)) {
          cur.x = this.canva.width - cur.w
        } else if (e.clientX <= (this.canva.offsetLeft + cur.w / 2)) {
          cur.x = 0
        } else if (e.clientY >= (this.canva.offsetTop + this.canva.height - cur.h / 2)) {
          cur.y = this.canva.height - cur.h
        } else if (e.clientY <= (this.canva.offsetTop + cur.h / 2)) {
          cur.y = 0
        }
      },
      // 绘制正方形
      drawRect(x, y, r, _this) {
        this._this = _this
        this.x = x
        this.y = y
        this.r = r
        this.w = 50
        this.h = 50
        this.zoomRadio = 1 // 缩放比例
        this.link = ''
        this.isCurrent = false
        // 绘制矩形，找出当前操作矩阵实例
        this.drawR = function (ctx, cx, cy, type) {
          ctx.save()
          ctx.beginPath()
          ctx.moveTo(this.x, this.y)
          ctx.rect(this.x, this.y, this.w, this.h)
          if (cx && cy && ctx.isPointInPath(cx, cy) && !this._this.currentR || this.isCurrent) {
            if (type !== 'color') {
              this._this.currentR = this
              this.isCurrent = true
            }
            ctx.fillStyle = '#ff0000'

          } else {
            ctx.fillStyle = '#999999'
          }
          ctx.fill()
        }
      },
      // init draw
      draw(x, y) {
        const r = new this.drawRect(100, 100, 20, this)
        r.drawR(this.ctx, x, y)
        this.rectList.push(r)
      },
      reDraw(e) {
        const canva = this.$refs.canvasDrag
        const w = canva.width
        const h = canva.height
        let x, y, type
        canva.width = w
        canva.height = h
        if (e) {
          x = e.clientX - canva.offsetLeft
          y = e.clientY - canva.offsetTop
        } else {
          x = this.curData.x
          y = this.curData.y
          // 保证当前矩阵状态，但不改变拖拽状态
          type = 'color'
        }
        this.rectList.forEach(item => {
          item.drawR(this.ctx, x, y, type)
        })
      },
      // 添加热点
      handleAdd() {
        this.currentR = null
        this.rectList.forEach(item => {
          item.isCurrent = false
        })
        this.draw()
      },
      // 获取设置当前矩阵的数据
      currentData(cur) {
        this.curData = cur
      },
      linkInput(value) {
        this.curData.link = value
      },
      // 控制当前矩阵的大小
      setSize(type) {
        if (type === 'back') {
          this.controlSize = this.getNumber((this.controlSize * 100 - 10) / 100)
        } else {
          this.controlSize = this.getNumber((this.controlSize * 100 + 10) / 100)
        }
        const rectWidth = this.getNumber(50 * this.controlSize)
        const rectHeight = this.getNumber(50 * this.controlSize)
        this.curData.w = rectWidth
        this.curData.h = rectHeight
        this.curData.zoomRadio = this.controlSize
        this.reDraw()
      },
      // 保留1位小数的number类型
      getNumber(num) {
        return Number.parseFloat(num.toFixed(1))
      }

    }
  }
</script>

<style scoped>
  .dib {
    display: inline-block;
  }

  .setArea {
    width: 200px;
    height: 100px;
    margin-left: 10px;
    border: 1px solid #999999;
    vertical-align: top;
    border-radius: 2px;
    padding: 10px;
  }

  .size-control {}
</style>