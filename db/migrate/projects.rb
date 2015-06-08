class Projects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name
      t.string :site
      t.string :code
      t.string :img
      t.text :description
    end
  end
end
