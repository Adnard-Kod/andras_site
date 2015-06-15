class Images < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.belongs_to :project, null: false
      t.attachment :picture
      t.timestamps
    end
  end
end
