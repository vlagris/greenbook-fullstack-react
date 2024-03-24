import {renderWithProviders} from "@/utils/utilsForTests.tsx";
import CurrentPageButton from "@components/Pagination/CurrentPageButton.tsx";
import {PaginationItemTypes} from "@components/Pagination/Item.tsx";

describe('current page button pagination component', () => {
  it('should ', () => {
    const component = renderWithProviders(<CurrentPageButton type={PaginationItemTypes.current} page={1}/>);
    const button = component.container.querySelectorAll('button')[0];

    expect(component).toMatchSnapshot();
    expect(button.className).toBe('btn_page active');
    expect(button.innerHTML).toBe('1');
  });
});