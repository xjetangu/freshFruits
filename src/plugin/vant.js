import Vue from 'vue';
import { Tabbar, TabbarItem, Icon, Tab, Tabs, Swipe, SwipeItem, Sidebar, SidebarItem, Toast, Lazyload, Checkbox, CheckboxGroup, Stepper, SubmitBar } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Toast);
Vue.use(Lazyload);
Vue.use(Lazyload, {
    lazyComponent: true,
});
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Checkbox);
Vue.use(Stepper);
Vue.use(SubmitBar);