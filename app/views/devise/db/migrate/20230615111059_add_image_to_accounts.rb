class AddImageToAccounts < ActiveRecord::Migration[7.0]
  def change
    add_column :accounts, :image, :string
    add_column :accounts, :company, :string
  end
end
