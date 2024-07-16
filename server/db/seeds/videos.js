/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('videos').del()
  await knex('videos').insert([
    { id: 1, name: "How to increase your happiness", url: "https://youtu.be/m4Ics03xzUQ?si=19GCxQRM5QBHz4vv", watched: false },
    { id: 2, name: "Can you change your sleep schedule?", url: "https://youtu.be/Amkg1cdDCpM?si=-Y40Su2EgolIz6f-", watched: false },
    { id: 3, name: "Improve Your Speaking", url: "https://youtu.be/c8_BIamLESg?si=epGjnEBPgP1eJtds", watched: true },
]);
}
