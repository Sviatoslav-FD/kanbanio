import { ref } from "vue";

const isSidebarVisible = ref<boolean>(true);

const boards = ref<any>([
  {
    id: "1",
    name: "Platform Launch",
    active: false,
  },
  {
    id: "2",
    name: "Marketing Plan",
    active: false,
  },
  {
    id: "3",
    name: "Roadmap",
    active: false,
  },
]);

export function useSidebar() {
  //@ts-ignore
  const router = useRouter();

  const onToggleSidebar = (): void => {
    isSidebarVisible.value = !isSidebarVisible.value;
  };

  const onRouteChange = () => {
    const currentRoute = router.currentRoute.value;

    if ("projectId" in currentRoute.query) {
      onMenuItemClick(currentRoute.query.projectId);
    } else {
      boards.value[0].active = true;
      router.replace({
        path: currentRoute.fullPath,
        query: { projectId: boards.value[0].id },
      });
    }
  };

  const onMenuItemClick = (id: string) => {
    if (id === "createNewBoard") {
      console.log("Create New Board");
    }

    boards.value.map((item: any) => {
      if (item.id === id) {
        item.active = true;

        router.replace({
          path: router.currentRoute.value.fullPath,
          query: { projectId: item.id },
        });
      } else item.active = false;
    });
  };

  const addNewBoard = (board: any) => {
    boards.value.push(board);
  };

  return {
    isSidebarVisible,
    boards,
    onToggleSidebar,
    onRouteChange,
    onMenuItemClick,
    addNewBoard,
  };
}
