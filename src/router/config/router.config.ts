import type { RouteRecordRaw } from 'vue-router'

const RouteView = {
  name: 'RouteView',
  render: (h:any) => h('router-view'),
}

// const asyncRouterMap: RouteRecordRaw[] = [
//   {
//     path: '/',
//     name: 'index',
//     component: () => import('@/layouts/BasicLayout.vue'),
//     children: [
//       {
//         path: '/system',
//         name: 'system',
//         component: () => RouteView,
//         meta: { title: '系统管理' },
//         children: [
//           {
//             path: '/system/type',
//             name: 'type',
//             component: () => import('@/views/system/Dict.vue'),
//             meta: { title: '字典管理', permission: ['dict'] }
//           },
//           {
//             path: '/system/role',
//             name: 'role',
//             component: () => import('@/views/system/Role.vue'),
//             meta: { title: '角色管理', permission: ['role'] }
//           },
//           {
//             path: '/system/user',
//             name: 'user',
//             component: () => import('@/views/system/User.vue'),
//             meta: { title: '用户管理', permission: ['user'] }
//           },
//           {
//             path: '/system/department',
//             name: 'department',
//             component: () => import('@/views/system/Dept.vue'),
//             meta: { title: '部门管理', permission: ['dept'] }
//           }
//         ]
//       },
//       {
//         path: '/material',
//         name: 'material',
//         component: () => RouteView,
//         meta: { title: '基础资料' },
//         children: [
//           {
//             path: '/material/material',
//             name: 'material',
//             component: () => import('@/views/material/Material.vue'),
//             meta: { title: '物料管理', permission: ['material'] }
//           },
//           {
//             path: '/material/customer',
//             name: 'customer',
//             component: () => import('@/views/material/Customer.vue'),
//             meta: { title: '客户', permission: ['material'] }
//           },
//           {
//             path: '/material/carrier',
//             name: 'carrier',
//             component: () => import('@/views/material/Carrier.vue'),
//             meta: { title: '承运商', permission: ['material'] }
//           },
//           {
//             path: '/material/supplier',
//             name: 'supplier',
//             component: () => import('@/views/material/Supplier.vue'),
//             meta: { title: '供应商', permission: ['material'] }
//           }
//
//         ]
//       },
//       {
//         path: '/inbound',
//         name: 'inbound',
//         component: () => RouteView,
//         meta: { title: '入库管理' },
//         children: [
//           {
//             path: '/inbound/appointment',
//             name: 'inAppointment',
//             component: () => import('@/views/inbound/Appointment.vue'),
//             meta: { title: '入库预约', permission: ['inbound'] }
//           },
//           {
//             path: '/inbound/receiving',
//             name: 'receiving',
//             component: () => import('@/views/inbound/Receiving.vue'),
//             meta: { title: '收货', permission: ['receiving'] }
//           },
//           {
//             path: '/inbound/putAway',
//             name: 'putAway',
//             component: () => import('@/views/inbound/PutAway.vue'),
//             meta: { title: '上架', permission: ['putaway'] }
//           }
//         ]
//       },
//       {
//         path: '/outbound',
//         name: 'outbound',
//         component: () => RouteView,
//         meta: { title: '出库管理' },
//         children: [
//           {
//             path: '/outbound/appointment',
//             name: 'outAppointment',
//             component: () => import('@/views/outbound/Appointment.vue'),
//             meta: { title: '出库预约', permission: ['outbound'] }
//           },
//           {
//             path: '/outbound/pickingGoods',
//             name: 'pickingGoods',
//             component: () => import('@/views/outbound/PickingGoods.vue'),
//             meta: { title: '拣货', permission: ['picking'] }
//           }
//         ]
//       },
//       {
//         path: '/repertory',
//         name: 'repertory',
//         component: () => RouteView,
//         meta: { title: '库内管理' },
//         children: [
//           {
//             path: '/repertory/overall',
//             name: 'overall',
//             component: () => import('@/views/repertory/Overall.vue'),
//             meta: { title: '总体库存', permission: ['overall'] }
//           },
//           {
//             path: '/repertory/location',
//             name: 'repertoryLocation',
//             component: () => import('@/views/repertory/Location.vue'),
//             meta: { title: '库位库存', permission: ['location'] }
//           },
//           {
//             path: '/repertory/inventory',
//             name: 'inventory',
//             component: () => import('@/views/repertory/Inventory.vue'),
//             meta: { title: '盘点', permission: ['setPoint'] }
//           },
//           {
//             path: '/repertory/moving',
//             name: 'moving',
//             component: () => import('@/views/repertory/Moving.vue'),
//             meta: { title: '移库', permission: ['moving'] }
//           }
//         ]
//       },
//       {
//         path: '/repertorySet',
//         name: 'repertorySet',
//         component: () => RouteView,
//         meta: { title: '仓库设置' },
//         children: [
//           // {
//           // 	path: '/repertorySet/warehouse',
//           // 	name: 'warehouse',
//           // 	component: () => import('@/views/repertorySet/Warehouse.vue'),
//           // 	meta: { title: '仓库管理', permission: ['rack'] }
//           // },
//           {
//             path: '/repertorySet/shelfType',
//             name: 'shelfType',
//             component: () => import('@/views/repertorySet/ShelfType.vue'),
//             meta: { title: '货架类型', permission: ['rack'] }
//           },
//           {
//             path: '/repertorySet/shelf',
//             name: 'shelf',
//             component: () => import('@/views/repertorySet/Shelf.vue'),
//             meta: { title: '货架管理', permission: ['rack'] }
//           },
//           {
//             path: '/repertorySet/slotType',
//             name: 'slotType',
//             component: () => import('@/views/repertorySet/SlotType.vue'),
//             meta: { title: '货位类型', permission: ['locationSet'] }
//           },
//           {
//             path: '/repertorySet/slot',
//             name: 'slot',
//             component: () => import('@/views/repertorySet/Slot.vue'),
//             meta: { title: '货位管理', permission: ['locationSet'] }
//           },
//           {
//             path: '/repertorySet/reservoirArea',
//             name: 'reservoirArea',
//             component: () => import('@/views/repertorySet/ReservoirArea.vue'),
//             meta: { title: '库区管理', permission: ['reservoir'] }
//           },
//           {
//             path: '/repertorySet/container',
//             name: 'container',
//             component: () => import('@/views/repertorySet/Container.vue'),
//             meta: { title: '容器管理', permission: ['container'] }
//           }
//         ]
//       }
//     ]
//   }
// ]

const asyncRouterMap = [
  {
    path: '/system',
    name: 'system',
    component: () => RouteView,
    meta: { title: '系统管理' },
    children: [
      {
        path: '/system/type',
        name: 'type',
        component: () => import('@/views/system/Dict.vue'),
        meta: { title: '字典管理', permission: ['dict'] },
      },
      {
        path: '/system/role',
        name: 'role',
        component: () => import('@/views/system/Role.vue'),
        meta: { title: '角色管理', permission: ['role'] },
      },
      {
        path: '/system/user',
        name: 'user',
        component: () => import('@/views/system/User.vue'),
        meta: { title: '用户管理', permission: ['user'] },
      },
      {
        path: '/system/department',
        name: 'department',
        component: () => import('@/views/system/Dept.vue'),
        meta: { title: '部门管理', permission: ['dept'] },
      },
    ],
  },
  {
    path: '/material',
    name: 'material',
    component: () => RouteView,
    meta: { title: '基础资料' },
    children: [
      {
        path: '/material/material',
        name: 'material',
        component: () => import('@/views/material/Material.vue'),
        meta: { title: '物料管理', permission: ['material'] },
      },
      {
        path: '/material/customer',
        name: 'customer',
        component: () => import('@/views/material/Customer.vue'),
        meta: { title: '客户', permission: ['material'] },
      },
      {
        path: '/material/carrier',
        name: 'carrier',
        component: () => import('@/views/material/Carrier.vue'),
        meta: { title: '承运商', permission: ['material'] },
      },
      {
        path: '/material/supplier',
        name: 'supplier',
        component: () => import('@/views/material/Supplier.vue'),
        meta: { title: '供应商', permission: ['material'] },
      },
    ],
  },
  {
    path: '/inbound',
    name: 'inbound',
    component: () => RouteView,
    meta: { title: '入库管理' },
    children: [
      {
        path: '/inbound/appointment',
        name: 'inAppointment',
        component: () => import('@/views/inbound/Appointment.vue'),
        meta: { title: '入库预约', permission: ['inbound'] },
      },
      {
        path: '/inbound/receiving',
        name: 'receiving',
        component: () => import('@/views/inbound/Receiving.vue'),
        meta: { title: '收货', permission: ['receiving'] },
      },
      {
        path: '/inbound/putAway',
        name: 'putAway',
        component: () => import('@/views/inbound/PutAway.vue'),
        meta: { title: '上架', permission: ['putaway'] },
      },
    ],
  },
  {
    path: '/outbound',
    name: 'outbound',
    component: () => RouteView,
    meta: { title: '出库管理' },
    children: [
      {
        path: '/outbound/appointment',
        name: 'outAppointment',
        component: () => import('@/views/outbound/Appointment.vue'),
        meta: { title: '出库预约', permission: ['outbound'] },
      },
      {
        path: '/outbound/pickingGoods',
        name: 'pickingGoods',
        component: () => import('@/views/outbound/PickingGoods.vue'),
        meta: { title: '拣货', permission: ['picking'] },
      },
    ],
  },
  {
    path: '/repertory',
    name: 'repertory',
    component: () => RouteView,
    meta: { title: '库内管理' },
    children: [
      {
        path: '/repertory/overall',
        name: 'overall',
        component: () => import('@/views/repertory/Overall.vue'),
        meta: { title: '总体库存', permission: ['overall'] },
      },
      {
        path: '/repertory/location',
        name: 'repertoryLocation',
        component: () => import('@/views/repertory/Location.vue'),
        meta: { title: '库位库存', permission: ['location'] },
      },
      {
        path: '/repertory/inventory',
        name: 'inventory',
        component: () => import('@/views/repertory/Inventory.vue'),
        meta: { title: '盘点', permission: ['setPoint'] },
      },
      {
        path: '/repertory/moving',
        name: 'moving',
        component: () => import('@/views/repertory/Moving.vue'),
        meta: { title: '移库', permission: ['moving'] },
      },
    ],
  },
  {
    path: '/repertorySet',
    name: 'repertorySet',
    component: () => RouteView,
    meta: { title: '仓库设置' },
    children: [
      // {
      // 	path: '/repertorySet/warehouse',
      // 	name: 'warehouse',
      // 	component: () => import('@/views/repertorySet/Warehouse.vue'),
      // 	meta: { title: '仓库管理', permission: ['rack'] }
      // },
      {
        path: '/repertorySet/shelfType',
        name: 'shelfType',
        component: () => import('@/views/repertorySet/ShelfType.vue'),
        meta: { title: '货架类型', permission: ['rack'] },
      },
      {
        path: '/repertorySet/shelf',
        name: 'shelf',
        component: () => import('@/views/repertorySet/Shelf.vue'),
        meta: { title: '货架管理', permission: ['rack'] },
      },
      {
        path: '/repertorySet/slotType',
        name: 'slotType',
        component: () => import('@/views/repertorySet/SlotType.vue'),
        meta: { title: '货位类型', permission: ['locationSet'] },
      },
      {
        path: '/repertorySet/slot',
        name: 'slot',
        component: () => import('@/views/repertorySet/Slot.vue'),
        meta: { title: '货位管理', permission: ['locationSet'] },
      },
      {
        path: '/repertorySet/reservoirArea',
        name: 'reservoirArea',
        component: () => import('@/views/repertorySet/ReservoirArea.vue'),
        meta: { title: '库区管理', permission: ['reservoir'] },
      },
      {
        path: '/repertorySet/container',
        name: 'container',
        component: () => import('@/views/repertorySet/Container.vue'),
        meta: { title: '容器管理', permission: ['container'] },
      },
    ],
  },
]

export { asyncRouterMap }

// 基础路由

export const constantRouterMap: RouteRecordRaw[] = [
  {
    path: '/user/login',
    name: 'login',
    component: () => import('@/views/user/Login.vue'),
  },

  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/403.vue'),
  },
]
