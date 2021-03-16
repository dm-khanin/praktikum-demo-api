class TodoListForm {

  static _template = document.querySelector('#todolist-form-template').content;
  /*
    <form class="todolist-form">
      <input type="text" class="todolist-form_input" />
      <button type="submit" class="todolist-form_submit">Сохранить</button>
    </form>
   */

  constructor(addItem) {
    this._addItem = addItem;
  }

  _submitHandler = (evt) => {
    evt.preventDefault();
    const text = this._view.querySelector('.todolist-form_input').value;
    this._addItem(text);
  }

  render = (container) => {
    this._view = TodoListForm._template.cloneNode(true).children[0];
    this._view.addEventListener('submit', this._submitHandler);
    container.append(this._view);
  }

}
