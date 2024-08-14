import mesop as me


@me.page()
def page():
  state = me.state(State)
  me.text("Count=" + str(state.count))
  me.button("Increment", on_click=increment)


def increment(e: me.ClickEvent):
  state = me.state(State)
  state.count += 1


@me.stateclass
class State:
  count: int = 0
