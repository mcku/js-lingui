i18n._("{gender, select, male {{numOfGuests, plural, one {He invites one guest} other {He invites # guests}}} female {She is {gender}} other {They is {gender}}}", {
  values: {
    gender: gender,
    numOfGuests: numOfGuests
  }
});
i18n._("{0, select, male {{1, plural, one {He invites one guest} other {He invites # guests}}} female {She is {gender}} other {They is {gender}}}", {
  values: {
    0: "male",
    1: 42,
    gender: gender
  }
});
