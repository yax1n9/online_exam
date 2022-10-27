import {
  Button, Input, Row, Col, Message, Container, Header, Aside, Main,
  Menu, Submenu, MenuItemGroup, MenuItem, Avatar, Breadcrumb, BreadcrumbItem,
  Dropdown, DropdownMenu, DropdownItem, Empty, Table, TableColumn, Pagination,
  Link, Select, Option, Autocomplete, Form, FormItem, Dialog, DatePicker, TimePicker, Card, Checkbox, Tag,
  Steps, Step, Upload, Tabs, TabPane, MessageBox
} from 'element-ui'
import Scrollbar from 'element-ui/lib/scrollbar'

const comps = [Button, Input, Row, Col, Container, Header, Aside, Main, Menu, Submenu, MenuItemGroup, MenuItem, Scrollbar,
  Avatar, Breadcrumb, BreadcrumbItem, Dropdown, DropdownMenu, DropdownItem, Empty, Table, TableColumn, Pagination,
  Link, Select, Option, Autocomplete, Form, FormItem, Dialog, DatePicker, TimePicker, Card, Checkbox, Tag, Steps, Step,
  Upload, Tabs, TabPane]

export default function useEle (Vue) {
  comps.forEach(item => {
    Vue.use(item)
  })
  Vue.prototype.$message = Message
  Vue.prototype.$confirm = MessageBox.confirm
}
