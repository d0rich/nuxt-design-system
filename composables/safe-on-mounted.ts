// TODO: replace when https://github.com/vuejs/core/issues/5844 is fixed
export const useSafeOnMounted = (
  element: Ref<HTMLElement>,
  listener: () => void,
  checkTimeLimit = 500
) => {
  if (process.client) {
    const checkInterval = 100
    let checksLeft = checkTimeLimit / checkInterval

    const check = () => {
      if (element.value?.isConnected) {
        listener()
      } else if (checksLeft > 0) {
        setTimeout(check, checkInterval)
        checksLeft--
      }
    }

    onMounted(() => {
      check()
    })
  }
}
