---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: '../../img/RS-Settings.webp',
    name: '插件说明/设置',
    title: '插件相关设置和登录验证',
    links: [
      {
        icon: {
          svg: '<svg t="1700753901797" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6917" width="200" height="200"><path d="M760.768 576L384 931.84 469.76 1024 1024 515.392 474.048 0 384 98.88 753.6 448H0v128h760.768z" fill="#262626" p-id="6918"></path></svg>'
        },
        link: '/project/RS-NodeTool/01-RNT-setting'
      }
    ]
  },
  {
    avatar: '../../img/RS-AutoPBR.webp',
    name: 'AutoPBR',
    title: '自动PBR',
    links: [
      {
        icon: {
          svg: '<svg t="1700753901797" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6917" width="200" height="200"><path d="M760.768 576L384 931.84 469.76 1024 1024 515.392 474.048 0 384 98.88 753.6 448H0v128h760.768z" fill="#262626" p-id="6918"></path></svg>'
        },
        link: '/project/RS-NodeTool/02-RNT-AutoPBR',
      }
    ]
  },
  {
    avatar: '../../img/RS-QuickNode.webp',
    name: 'AutoNode',
    title: '自动节点',
    links: [
      {
        icon: {
          svg: '<svg t="1700753901797" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6917" width="200" height="200"><path d="M760.768 576L384 931.84 469.76 1024 1024 515.392 474.048 0 384 98.88 753.6 448H0v128h760.768z" fill="#262626" p-id="6918"></path></svg>'
        },
        link: '...',
      }
    ]
  },
  {
    avatar: '../../img/RS-AutoID.webp',
    name: 'AutoID',
    title: '自动ID/PuzzleMatte',
    links: [
      {
        icon: {
          svg: '<svg t="1700753901797" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6917" width="200" height="200"><path d="M760.768 576L384 931.84 469.76 1024 1024 515.392 474.048 0 384 98.88 753.6 448H0v128h760.768z" fill="#262626" p-id="6918"></path></svg>'
        },
        link: '...',
      }
    ]
  },
  {
    avatar: '../../img/To PBR.webp',
    name: 'To PBR',
    title: 'PBR连接',
    links: [
      {
        icon: {
          svg: '<svg t="1700753901797" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6917" width="200" height="200"><path d="M760.768 576L384 931.84 469.76 1024 1024 515.392 474.048 0 384 98.88 753.6 448H0v128h760.768z" fill="#262626" p-id="6918"></path></svg>'
        },
        link: '...',
      }
    ]
  },
  {
    avatar: '../../img/TriPlanar Control.webp',
    name: 'Set TriPlanar',
    title: '添加TriPlanar/处理平铺',
    links: [
      {
        icon: {
          svg: '<svg t="1700753901797" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6917" width="200" height="200"><path d="M760.768 576L384 931.84 469.76 1024 1024 515.392 474.048 0 384 98.88 753.6 448H0v128h760.768z" fill="#262626" p-id="6918"></path></svg>'
        },
        link: '...',
      }
    ]
  },
  {
    avatar: '../../img/UV PSR.webp',
    name: 'UV PSR',
    title: '添加PSR控制',
    links: [
      {
        icon: {
          svg: '<svg t="1700753901797" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6917" width="200" height="200"><path d="M760.768 576L384 931.84 469.76 1024 1024 515.392 474.048 0 384 98.88 753.6 448H0v128h760.768z" fill="#262626" p-id="6918"></path></svg>'
        },
        link: '...',
      }
    ]
  },
  {
    avatar: '../../img/Set UDIM.webp',
    name: 'Set UDIM',
    title: '设置UDIM',
    links: [
      {
        icon: {
          svg: '<svg t="1700753901797" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6917" width="200" height="200"><path d="M760.768 576L384 931.84 469.76 1024 1024 515.392 474.048 0 384 98.88 753.6 448H0v128h760.768z" fill="#262626" p-id="6918"></path></svg>'
        },
        link: '...',
      }
    ]
  },
  {
    avatar: '../../img/Color Space.webp',
    name: 'Color Space',
    title: '设置颜色空间',
    links: [
      {
        icon: {
          svg: '<svg t="1700753901797" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6917" width="200" height="200"><path d="M760.768 576L384 931.84 469.76 1024 1024 515.392 474.048 0 384 98.88 753.6 448H0v128h760.768z" fill="#262626" p-id="6918"></path></svg>'
        },
        link: '...',
      }
    ]
  },
  {
    avatar: '../../img/To Sprite.webp',
    name: 'To Sprite',
    title: '转为Sprite',
    links: [
      {
        icon: {
          svg: '<svg t="1700753901797" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6917" width="200" height="200"><path d="M760.768 576L384 931.84 469.76 1024 1024 515.392 474.048 0 384 98.88 753.6 448H0v128h760.768z" fill="#262626" p-id="6918"></path></svg>'
        },
        link: '...',
      }
    ]
  },
  {
    avatar: '../../img/Optimize Select.webp',
    name: 'Optimize Node',
    title: '优化节点',
    links: [
      {
        icon: {
          svg: '<svg t="1700753901797" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6917" width="200" height="200"><path d="M760.768 576L384 931.84 469.76 1024 1024 515.392 474.048 0 384 98.88 753.6 448H0v128h760.768z" fill="#262626" p-id="6918"></path></svg>'
        },
        link: '...',
      }
    ]
  },
  {
    avatar: '../../img/Blur Node.webp',
    name: 'Blur Node',
    title: '模糊节点',
    links: [
      {
        icon: {
          svg: '<svg t="1700753901797" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6917" width="200" height="200"><path d="M760.768 576L384 931.84 469.76 1024 1024 515.392 474.048 0 384 98.88 753.6 448H0v128h760.768z" fill="#262626" p-id="6918"></path></svg>'
        },
        link: '...',
      }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      RS-NodeTool 节点工具
    </template>
    <template #lead>
      Redshift新版节点（Node）辅助工具，支持2023~2024
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    size="small"
    :members="members"
  />
</VPTeamPage>
