class CreateCourses < ActiveRecord::Migration[6.0]
  def change
    create_table :courses do |t|
      t.string :courseName
      t.string :category
      t.string :subcategory
      t.integer :level
      t.string :username
      t.decimal :real_price
      t.decimal :price
      t.decimal :discount
      t.decimal :course_score
      t.integer :users

      t.timestamps
    end
  end
end
