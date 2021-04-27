<template>
  <!-- 加载 -->
  <div class="box-b p10 h loading">
    <el-card class="doc w h  over-a-y">
      <ld-doc :doc="doc">
        <template v-slot:frist="e">
          <el-card class="p10 b-i1">
            <ld-menu-tree class="w-200" style="height: 500px;overflow: hidden auto;" :tree="tree">
            </ld-menu-tree>
          </el-card>
        </template>

        <template v-slot:secound="e">
          <ld-forms class="m-t10 m-b10" :form="forms" :layout="layout" :is-row="true">
            <template v-slot:buttons="e">
              <div style="position: relative;">
                <el-button type="primary m-l10" @click="copy('#doc2',true)">复制代码</el-button>
              </div>
            </template>
          </ld-forms>
          <el-card class="p10 b-i1">
            <ld-menu-tree class="w-200" style="height: 500px;overflow: hidden auto;" :tree="tree">
            </ld-menu-tree>
          </el-card>
        </template>


        <template v-slot:foot="e">
          <foot></foot>
        </template>
      </ld-doc>

    </el-card>
  </div>
</template>

<script>
  import res from './menu-tree-res.js'
  export default {
    name: 'loading',
    data() {
      return {
        forms: {},
        layout: res.layout,

        tree: [{
            label: '菜单1',
            prop: 'menu1',
            children: [{
                label: '二级菜单1',
                prop: 'cmenu1',
                children: [{
                    label: '三级菜单1',
                    prop: 'ccmenu1',
                  },
                  {
                    label: '三级菜单2',
                    prop: 'ccmenu2',
                    children: [{
                      label: '四级菜单1',
                      prop: 'cccmenu1',
                    }, {
                      label: '四级菜单1',
                      prop: 'cccmenu2',
                    }]
                  },
                ]
              },
              {
                label: '二级菜单2',
                prop: 'cmenu2',
              },
              {
                label: '二级菜单3',
                prop: 'cmenu3',
              },
            ]
          },
          {
            label: '菜单2',
            prop: 'menu2',
          },
          {
            label: '菜单3',
            prop: 'menu3',
          },
          {
            label: '菜单4',
            prop: 'menu4',
          },
          {
            label: '菜单5',
            prop: 'menu5',
          },
        ],

        doc: [{
            title: '菜单树组件`ld-menu-tree`',
            tip: '通过参数可多层递归显示菜单树',
            tip_d: '注意：理论上通过children节点可以无限递归多层菜单树，但为了性能考虑，请慎重操作!',
          },
          {
            h1: '一.简单示例',
            h2: '示例代码',
            html: `
            <ld-menu-tree class="w-200" style="height: 500px;overflow: hidden auto;" :tree="tree"></ld-menu-tree>
            `.replace(/^        /gm, ''),
            javascript: `
            export default {
                data() {
                  return {
                    tree:[
                      {label: '菜单1',prop: 'menu1',
                        children: [
                          {label: '二级菜单1',prop: 'cmenu1',
                            children: [
                              {label: '三级菜单1',prop: 'ccmenu1',},
                              {label: '三级菜单2',prop: 'ccmenu2',
                                children: [
                                    {label: '四级菜单1',prop: 'cccmenu1'},
                                    {label: '四级菜单1',prop: 'cccmenu2'}]
                                },
                            ]},
                          {label: '二级菜单2',prop: 'cmenu2'},
                          {label: '二级菜单3',prop: 'cmenu3'}]
                      },
                      {label: '菜单2',prop: 'menu2'},
                      {label: '菜单3',prop: 'menu3'},
                      {label: '菜单4',prop: 'menu4'},
                      {label: '菜单5',prop: 'menu5'},
                  ],
                }
              }
            }`.replace(/^          /gm, ''),
            p: '效果如下',
            slot: 'frist'
          },
          {
            h1: '一.自定义示例样式',
            slot: 'secound'
          },
          {
            slot: 'foot'
          }
        ]
      }
    },
    created() {}
  }
</script>

<style>
  .loading .el-card__body {
    padding: 0 !important;
  }
</style>
