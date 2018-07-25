const LayoutActionTypes = {
  OPEN_SIDEBAR: '[Layout] OPEN_SIDEBAR',
  CLOSE_SIDEBAR: '[Layout] CLOSE_SIDEBAR',
};

const openSidebar = () => ({
  type: LayoutActionTypes.OPEN_SIDEBAR,
});
const closeSidebar = () => ({
  type: LayoutActionTypes.CLOSE_SIDEBAR,
});

export { LayoutActionTypes, openSidebar, closeSidebar };
