import executeAction from '../executeAction';

function gold() {
  return { type: 'GOLD', state: 'SOLID' };
}

function starterMachine(position) {
  return {
    position,
    direction: 0,
    type: 'STARTER',
    resource: { type: 'GOLD', state: 'SOLID' },
    isCrafting: false,
  };
}

function recipe() {
  return {
    name: 'CUPROALUMINIUM',
    ingredients: [
      { material: { type: 'ALUMINUM', state: 'SOLID' }, amount: 1 },
      { material: { type: 'COPPER', state: 'SOLID' }, amount: 1 },
    ],
    newMaterial: { type: 'CUPROALUMINIUM', state: 'SOLID' },
  };
}

function crafterMachine(position) {
  return {
    position,
    direction: 0,
    type: 'CRAFTER',
    recipe: recipe(),
    ingredients: [],
    isCrafting: false,
  };
}

function furnaceMachine(position) {
  return {
    position,
    direction: 0,
    type: 'FURNACE',
    toFurnace: [],
    doneFurnace: [],
  };
}

function transporterMachine(position) {
  return {
    position,
    direction: 0,
    type: 'TRANSPORTER',
    onBoard: [],
  };
}

function sellerMachine(position) {
  return {
    position,
    direction: 0,
    type: 'SELLER',
    toSell: [],
  };
}

function emptyMachine(position) {
  return {
    position,
    type: 'EMPTY',
  };
}

describe('executeAction', () => {
  it('when action is null should do nothing', () => {
    const position = { x: 1, y: 0 };
    const machines = [emptyMachine(position)];
    expect(executeAction(position, machines, { action: null })).toEqual(machines);
  });
  it('when action is STARTER should change empty machine to starter machine', () => {
    const position = { x: 1, y: 0 };
    const machines = [emptyMachine(position)];
    expect(executeAction(position, machines, { action: 'STARTER', data: gold() }))
      .toEqual([starterMachine(position)]);
  });
  it('when action is STARTER should change first empty machine to starter machine', () => {
    const position = { x: 1, y: 0 };
    const position2 = { x: 1, y: 1 };
    const machines = [emptyMachine(position), emptyMachine(position2)];
    expect(executeAction(position, machines, { action: 'STARTER', data: gold() }))
      .toEqual([starterMachine(position), emptyMachine(position2)]);
  });
  it('when action is REMOVE_MACHINE should change starter machine to empty machine', () => {
    const position = { x: 1, y: 0 };
    const machines = [starterMachine(position)];
    expect(executeAction({ x: 1, y: 0 }, machines, { action: 'REMOVE_MACHINE' }))
      .toEqual([emptyMachine(position)]);
  });
  it('when action is REMOVE_MACHINE should change first starter machine to empty machine', () => {
    const position = { x: 1, y: 0 };
    const position2 = { x: 1, y: 1 };
    const machines = [starterMachine(position), emptyMachine(position2)];
    expect(executeAction({ x: 1, y: 0 }, machines, { action: 'REMOVE_MACHINE' }))
      .toEqual([emptyMachine(position), emptyMachine(position2)]);
  });
  it('when action is ROTATE_MACHINE should change position to starter machine', () => {
    const position = { x: 1, y: 0 };
    const machine = starterMachine(position);
    const machines = [machine];
    expect(executeAction({ x: 1, y: 0 }, machines, { action: 'ROTATE_MACHINE' }))
      .toEqual([{ ...machine, direction: 90 }]);
  });
  it('when action is ROTATE_MACHINE should change position to first starter machine', () => {
    const position = { x: 1, y: 0 };
    const position2 = { x: 1, y: 1 };
    const machine = starterMachine(position);
    const machines = [machine, emptyMachine(position2)];
    expect(executeAction({ x: 1, y: 0 }, machines, { action: 'ROTATE_MACHINE' }))
      .toEqual([{ ...machine, direction: 90 }, emptyMachine(position2)]);
  });
  it('when action is CRAFTER should change empty machine to crafter machine', () => {
    const position = { x: 1, y: 0 };
    const machines = [emptyMachine(position)];
    expect(executeAction(position, machines, { action: 'CRAFTER', data: recipe() })).toEqual([crafterMachine(position)]);
  });
  it('when action is CRAFTER should change first empty machine to crafter machine', () => {
    const position = { x: 1, y: 0 };
    const position2 = { x: 1, y: 1 };
    const machines = [emptyMachine(position), emptyMachine(position2)];
    expect(executeAction(position, machines, { action: 'CRAFTER', data: recipe() })).toEqual([crafterMachine(position), emptyMachine(position2)]);
  });
  it('when action is FURNACE should change empty machine to furnace machine', () => {
    const position = { x: 1, y: 0 };
    const machines = [emptyMachine(position)];
    expect(executeAction(position, machines, { action: 'FURNACE' })).toEqual([furnaceMachine(position)]);
  });
  it('when action is FURNACE should change first empty machine to furnace machine', () => {
    const position = { x: 1, y: 0 };
    const position2 = { x: 1, y: 1 };
    const machines = [emptyMachine(position), emptyMachine(position2)];
    expect(executeAction(position, machines, { action: 'FURNACE' })).toEqual([furnaceMachine(position), emptyMachine(position2)]);
  });
  it('when action is TRANSPORTER should change empty machine to transporter machine', () => {
    const position = { x: 1, y: 0 };
    const machines = [emptyMachine(position)];
    expect(executeAction(position, machines, { action: 'TRANSPORTER' })).toEqual([transporterMachine(position)]);
  });
  it('when action is TRANSPORTER should change first empty machine to transporter machine', () => {
    const position = { x: 1, y: 0 };
    const position2 = { x: 1, y: 1 };
    const machines = [emptyMachine(position), emptyMachine(position2)];
    expect(executeAction(position, machines, { action: 'TRANSPORTER' })).toEqual([transporterMachine(position), emptyMachine(position2)]);
  });
  it('when action is SELLER should change empty machine to seller machine', () => {
    const position = { x: 1, y: 0 };
    const machines = [emptyMachine(position)];
    expect(executeAction(position, machines, { action: 'SELLER' })).toEqual([sellerMachine(position)]);
  });
  it('when action is SELLER should change first empty machine to seller machine', () => {
    const position = { x: 1, y: 0 };
    const position2 = { x: 1, y: 1 };
    const machines = [emptyMachine(position), emptyMachine(position2)];
    expect(executeAction(position, machines, { action: 'SELLER' })).toEqual([sellerMachine(position), emptyMachine(position2)]);
  });
  it('when action is MOVE_MACHINE should swap machines', () => {
    const position = { x: 1, y: 0 };
    const position2 = { x: 1, y: 1 };
    const position3 = { x: 1, y: 2 };
    const machines = [starterMachine(position), emptyMachine(position2), emptyMachine(position3)];
    expect(executeAction(position, machines, { action: 'MOVE_MACHINE', data: position2 })).toEqual([emptyMachine(position), starterMachine(position2), emptyMachine(position3)]);
  });
});
